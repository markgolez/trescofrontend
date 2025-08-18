import { useState } from 'react';
import * as S from './Styles';

interface Tx { 
  id: number; 
  date: string; 
  amount: number; 
  status: 'completed' | 'pending'; 
  remarks?: string; 
}

const Wallet = () => {
  const [selected, setSelected] = useState<Tx | null>(null);
  const data: Tx[] = [
    { id: 1, date: '2025-01-01', amount: 120, status: 'completed', remarks: 'Deposit' },
    { id: 2, date: '2025-01-03', amount: -40, status: 'pending', remarks: 'Withdrawal' },
  ];

  return (
    <S.Container>
      <S.Panel>
        <h3>Statistics</h3>
        <div>Charts placeholder (integrate Chart.js / D3)</div>
      </S.Panel>
      <S.Panel>
        <h3>Transactions</h3>
        <S.Transactions>
          {data.map((t) => (
            <S.TxRow key={t.id} onClick={() => setSelected(t)}>
              <div>{t.date}</div>
              <div>{t.remarks}</div>
              <div style={{ color: t.amount < 0 ? '#c00' : '#138813' }}>
                {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
              </div>
            </S.TxRow>
          ))}
        </S.Transactions>
      </S.Panel>
      {selected && (
        <S.Detail>
          <h3>Transaction Detail</h3>
          <div>Date: {selected.date}</div>
          <div>Amount: {selected.amount}</div>
          <div>Status: {selected.status}</div>
          <div>Remarks: {selected.remarks}</div>
          <button style={{ marginTop: '12px' }}>Dispute</button>
        </S.Detail>
      )}
    </S.Container>
  );
};

export default Wallet;