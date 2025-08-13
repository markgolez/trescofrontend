import { useEffect, useState } from 'react';
import * as S from './Styles';

interface Post {
  id: number;
  author: string;
  content: string;
  created_at?: string;
}

const Momentos = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: replace with real API call when endpoint is ready
        const mock: Post[] = [
          { id: 1, author: 'Alice', content: 'Hello, Tresco!' },
          { id: 2, author: 'Bob', content: 'First post on Momentos.' },
        ];
        setPosts(mock);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <S.Container>
      <h2>Momentos</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <strong>{p.author}</strong>
              <div>{p.content}</div>
            </li>
          ))}
        </ul>
      )}
    </S.Container>
  );
};

export default Momentos;