import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 16px;
`;

export const Panel = styled.div`
  background: #fff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 16px;
`;

export const Transactions = styled.div`
  display: grid;
  gap: 8px;
`;

export const TxRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  gap: 8px;
  align-items: center;
  background: #fff;
  border: 1px solid #efeff4;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const Detail = styled.div`
  position: fixed;
  right: 0;
  top: 64px;
  width: 360px;
  height: calc(100vh - 64px);
  background: #fff;
  border-left: 1px solid #efeff4;
  padding: 16px;
`;