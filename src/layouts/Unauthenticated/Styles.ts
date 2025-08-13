import styled from 'styled-components';

import {colors} from '../../styles';

export const Container = styled.div`
  align-items: center;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
`;