import * as S from './Styles';
import { useState } from 'react';
import { useLayout } from '../../contexts/LayoutContext';

interface PostingItem { id: number; title: string; category: 'product' | 'service'; budget?: number; deadline?: string; summary?: string; }

const Posting = () => {
  const [items] = useState<PostingItem[]>([
    { id: 1, title: 'Need a plumber', category: 'service', budget: 120, deadline: '2025-01-15', summary: 'Fix leaking sink' },
    { id: 2, title: 'Looking for used laptop', category: 'product', budget: 400, summary: 'Any brand, good condition' },
  ]);
  const { openDetailPanel } = useLayout();

  return (
    <S.Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}>
        <div style={{ display: 'grid', gap: 12 }}>
          {items.map((p) => (
            <div key={p.id} onClick={() => openDetailPanel((
              <div>
                <h3>{p.title}</h3>
                <div>Category: {p.category}</div>
                {p.deadline && <div>Deadline: {p.deadline}</div>}
                {p.budget && <div>Budget: ${p.budget}</div>}
                <div>{p.summary}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <button>Place Bid</button>
                  <button>Message</button>
                </div>
              </div>
            ))} style={{ background: '#fff', border: '1px solid #efeff4', borderRadius: 8, padding: 12, cursor: 'pointer' }}>
              <div style={{ fontWeight: 600 }}>{p.title}</div>
              <div style={{ display: 'flex', gap: 8, fontSize: 12, color: '#536471' }}>
                <span>{p.category}</span>
                {p.deadline && <span>Deadline: {p.deadline}</span>}
              </div>
              <div style={{ marginTop: 6, color: '#536471' }}>{p.summary}</div>
              <div style={{ marginTop: 6, fontWeight: 600, color: '#0a440a' }}>{p.budget ? `$${p.budget}` : ''}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #efeff4', borderRadius: 8, padding: 12 }}>
          <h3>Details</h3>
          <div>Select a posting to see details, bidder stats, and actions.</div>
        </div>
      </div>
    </S.Container>
  );
};

export default Posting;