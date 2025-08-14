import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div` padding: 24px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; `;
const Panel = styled.div` background: #fff; border: 1px solid #efeff4; border-radius: 8px; padding: 16px; `;
const Transactions = styled.div` display: grid; gap: 8px; `;
const TxRow = styled.div`
  display: grid; grid-template-columns: 120px 1fr 120px; gap: 8px; align-items: center;
  background: #fff; border: 1px solid #efeff4; border-radius: 6px; padding: 8px 12px; cursor: pointer;
`;
const Detail = styled.div` position: fixed; right: 0; top: 64px; width: 360px; height: calc(100vh - 64px); background: #fff; border-left: 1px solid #efeff4; padding: 16px; `;

interface Tx { id: number; date: string; amount: number; status: 'completed' | 'pending'; remarks?: string; }

const Wallet = () => {
  const [selected, setSelected] = useState<Tx | null>(null);
  const data: Tx[] = [
    { id: 1, date: '2025-01-01', amount: 120, status: 'completed', remarks: 'Deposit' },
    { id: 2, date: '2025-01-03', amount: -40, status: 'pending', remarks: 'Withdrawal' },
  ];

  return (
    <Container>
      <Panel>
        <h3>Statistics</h3>
        <div>Charts placeholder (integrate Chart.js / D3)</div>
      </Panel>
      <Panel>
        <h3>Transactions</h3>
        <Transactions>
          {data.map((t) => (
            <TxRow key={t.id} onClick={() => setSelected(t)}>
              <div>{t.date}</div>
              <div>{t.remarks}</div>
              <div style={{ color: t.amount < 0 ? '#c00' : '#138813' }}>{t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}</div>
            </TxRow>
          ))}
        </Transactions>
      </Panel>
      {selected && (
        <Detail>
          <h3>Transaction Detail</h3>
          <div>Date: {selected.date}</div>
          <div>Amount: {selected.amount}</div>
          <div>Status: {selected.status}</div>
          <div>Remarks: {selected.remarks}</div>
          <button style={{ marginTop: 12 }}>Dispute</button>
        </Detail>
      )}
    </Container>
  );
};

export default Wallet;



