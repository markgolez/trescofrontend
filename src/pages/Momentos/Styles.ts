import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  height: 100%;
  ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
  li { background: #ffffff; border: 1px solid #efeff4; border-radius: 8px; padding: 12px; }
  strong { color: #0f2540; }
  div { color: #536471; }
`; 

export const FeedGrid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 16px;
`;

export const Composer = styled.div``;

export const Sidebar = styled.aside`
  background: #ffffff;
  border: 1px solid #efeff4;
  border-radius: 8px;
  padding: 12px;
  height: max-content;
`;