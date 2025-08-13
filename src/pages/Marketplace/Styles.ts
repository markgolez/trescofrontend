import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 100%;
`; 

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #0f2540;
`;

export const CardDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #536471;
`;