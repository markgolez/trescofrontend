import styled, {css} from 'styled-components';

export const Button = styled.button<{$color?: string; $hasIcon?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  background: ${({$color}) => $color || '#007bff'};
  color: #fff;
  cursor: pointer;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
  ${({$hasIcon}) =>
    $hasIcon &&
    css`
      svg {
        margin: 0 4px;
      }
    `}
`;

export const IconLeft = styled.span`
  display: flex;
  margin-right: 8px;
`;

export const IconRight = styled.span`
  display: flex;
  margin-left: 8px;
`;    