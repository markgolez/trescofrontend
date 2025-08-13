import {Link as ULink} from 'react-router-dom';
import styled from 'styled-components';

import UButton from '../../../components/Button';
import {Input as UInput} from '../../../components/FormElements';
import {fonts} from '../../../styles';

export const Button = styled(UButton)`
  width: 100%;
`;

export const Heading = styled.h2`
  color: #0a440a;
  margin-bottom: 12px;
`;

export const Input = styled(UInput)`
  width: 100%;
`;

export const Link = styled(ULink)`
  color: #138813;
  font-weight: ${fonts.weight.bold};
`;

export const Panel = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 32px 24px;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const QuestionText = styled.div`
  color: #0f2540;
  font-size: 12px;
  margin-top: 16px;
`; 