import styled from 'styled-components';

export type ViewMode = 'grid' | 'list';

const ToggleBar = styled.div`
  display: inline-flex;
  border: 1px solid #efeff4;
  border-radius: 6px;
  overflow: hidden;
  background: #ffffff;
`;

const ToggleBtn = styled.button<{ $active: boolean }>`
  padding: 6px 10px;
  background: ${({ $active }) => ($active ? '#e3f2e4' : 'transparent')};
  color: ${({ $active }) => ($active ? '#138813' : '#536471')};
  border: none;
  cursor: pointer;
  font-size: 13px;
  &:not(:last-child) { border-right: 1px solid #efeff4; }
`;

interface Props {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const ViewToggle = ({ mode, onChange }: Props) => {
  return (
    <ToggleBar>
      <ToggleBtn $active={mode === 'grid'} onClick={() => onChange('grid')}>Thumbnails</ToggleBtn>
      <ToggleBtn $active={mode === 'list'} onClick={() => onChange('list')}>Details</ToggleBtn>
    </ToggleBar>
  );
};

export default ViewToggle;


