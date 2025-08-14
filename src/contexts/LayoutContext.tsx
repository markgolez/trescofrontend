import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface DetailPanelState {
  isOpen: boolean;
  content: ReactNode | null;
}

interface LayoutContextValue {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  detailPanel: DetailPanelState;
  openDetailPanel: (content: ReactNode, options?: { collapseSidebar?: boolean }) => void;
  closeDetailPanel: () => void;
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

export const useLayout = (): LayoutContextValue => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within LayoutProvider');
  return ctx;
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [detailPanel, setDetailPanel] = useState<DetailPanelState>({ isOpen: false, content: null });

  const openDetailPanel = useCallback((content: ReactNode, options?: { collapseSidebar?: boolean }) => {
    const { collapseSidebar = true } = options || {};
    if (collapseSidebar) {
      setSidebarCollapsed(true);
    }
    setDetailPanel({ isOpen: true, content });
  }, []);

  const closeDetailPanel = useCallback(() => {
    setDetailPanel({ isOpen: false, content: null });
  }, []);

  const value = useMemo(
    () => ({ sidebarCollapsed, setSidebarCollapsed, detailPanel, openDetailPanel, closeDetailPanel }),
    [sidebarCollapsed, detailPanel, openDetailPanel, closeDetailPanel]
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;


