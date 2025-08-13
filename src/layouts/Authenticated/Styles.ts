import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main<{ collapsed: boolean; hasDetail?: boolean }>`
  margin-top: 64px; /* Height of the navbar */
  margin-left: ${props => (props.collapsed ? '55px' : '250px')}; /* Width of the sidebar */
  padding: 20px;
  flex: 1;
  transition: margin-left 0.25s ease-in-out;
  margin-right: ${props => (props.hasDetail ? '360px' : '0')};

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
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