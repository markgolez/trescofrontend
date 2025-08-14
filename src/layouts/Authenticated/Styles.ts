import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 64px 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
`;

export const MainContent = styled.main<{ collapsed: boolean; hasDetail?: boolean }>`
  grid-row: 2;
  grid-column: 2;
  padding: 20px;
  transition: padding-right 0.25s ease-in-out;
  min-width: 0;
  padding-right: ${props => (props.hasDetail ? '380px' : '20px')};

  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

export const DetailPanel = styled.aside`
  position: fixed;
  top: 64px;
  right: 0;
  width: 360px;
  height: calc(100vh - 64px);
  background: #ffffff;
  border-left: 1px solid #efeff4;
  box-shadow: -2px 0 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  border-bottom: 1px solid #efeff4;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`;

export const DetailBody = styled.div`
  padding: 16px;
  overflow: auto;
`;