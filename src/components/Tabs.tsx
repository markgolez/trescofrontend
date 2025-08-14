import styled from 'styled-components';
import { ReactNode } from 'react';

export interface TabItem { key: string; label: string; }

const TabsBar = styled.div`
  display: flex;
  border-bottom: 1px solid #efeff4;
  gap: 8px;
  overflow: auto;
`;
const TabBtn = styled.button<{ $active: boolean }>`
  padding: 10px 14px;
  border: 1px solid #efeff4;
  border-bottom: none;
  background: ${({ $active }) => ($active ? '#e3f2e4' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#138813' : '#536471')};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
`;
const TabPanel = styled.div`
  background: #ffffff;
  border: 1px solid #efeff4;
  border-radius: 0 6px 6px 6px;
  padding: 16px;
`;

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  children: ReactNode;
}

const Tabs = ({ items, activeKey, onChange, children }: TabsProps) => {
  return (
    <div>
      <TabsBar>
        {items.map((t) => (
          <TabBtn key={t.key} $active={t.key === activeKey} onClick={() => onChange(t.key)}>
            {t.label}
          </TabBtn>
        ))}
      </TabsBar>
      <TabPanel>{children}</TabPanel>
    </div>
  );
};

export default Tabs;



