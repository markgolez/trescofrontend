import { useEffect, useState } from 'react';
import * as S from './Styles';
import { createPost, listHashtags, listPosts, reactLike } from '../../api/momentos';
import { useLayout } from '../../contexts/LayoutContext';

interface Post {
  id: number;
  author?: string;
  content: string;
  created_at?: string;
  like_count?: number;
  agree_count?: number;
  disagree_count?: number;
}

const Momentos = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { openDetailPanel } = useLayout();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      try {
        const [p, h] = await Promise.all([listPosts(), listHashtags()]);
        if (!mounted) return;
        setPosts(Array.isArray(p) ? p : p?.results || []);
        setTags(Array.isArray(h) ? h : h?.results || []);
      } catch (e) {
        if (mounted) {
          setPosts([]);
          setTags([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchAll();
    return () => { mounted = false; };
  }, []);

  const [tags, setTags] = useState<string[]>([] as any);
  const [newPost, setNewPost] = useState('');

  const handleCreate = async () => {
    if (!newPost.trim()) return;
    try {
      await createPost({ content: newPost.trim(), content_type: 'text', is_public: true });
      const p = await listPosts();
      setPosts(Array.isArray(p) ? p : p?.results || []);
    } catch (e) {
      // no-op
    }
    setNewPost('');
  };

  const handleLike = async (postId: number) => {
    try {
      await reactLike(postId);
      const p = await listPosts();
      setPosts(Array.isArray(p) ? p : p?.results || []);
    } catch (e) {
      // ignore
    }
  };

  return (
    <S.Container>
      <h2>Momentos</h2>
      <S.FeedGrid>
        <div>
          <S.Composer>
            <div style={{ background: '#fff', border: '1px solid #efeff4', borderRadius: 8, padding: 12, marginBottom: 12 }}>
              <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="Share an idea..." style={{ width: '100%', minHeight: 80, border: '1px solid #efeff4', borderRadius: 6, padding: 8 }} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <button onClick={handleCreate}>Post</button>
              </div>
            </div>
          </S.Composer>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {posts.map((p) => (
                <li key={p.id} onClick={() => openDetailPanel((
                  <div>
                    <h3>{p.author || 'Anonymous'}</h3>
                    <div style={{ color: '#536471' }}>{p.content}</div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                      <button>Agree</button>
                      <button>Disagree</button>
                      <button>Comment</button>
                    </div>
                  </div>
                ))} style={{ cursor: 'pointer' }}>
                  <strong>{p.author || 'Anonymous'}</strong>
                  <div>{p.content}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 6, alignItems: 'center' }}>
                    <button onClick={() => handleLike(p.id)}>Like ({p.like_count || 0})</button>
                    <button>Agree ({p.agree_count || 0})</button>
                    <button>Disagree ({p.disagree_count || 0})</button>
                    <button>Comment</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <S.Sidebar>
          <h3>Trending Tags</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(Array.isArray(tags) ? tags : []).slice(0, 12).map((t: any) => (
              <span key={t.id || t} style={{ background: '#e3f2e4', color: '#138813', border: '1px solid #c8e6c9', borderRadius: 999, padding: '2px 8px', fontSize: 12 }}>{t.name || t}</span>
            ))}
          </div>
        </S.Sidebar>
      </S.FeedGrid>
    </S.Container>
  );
};

export default Momentos;