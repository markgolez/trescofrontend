import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as S from './Styles';
import { LayoutProvider, useLayout } from '../../contexts/LayoutContext';

const InnerLayout = () => {
  const { sidebarCollapsed, setSidebarCollapsed, detailPanel, closeDetailPanel } = useLayout();
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Close any open detail panel when route changes (navbar/sidebar navigation)
    if (detailPanel.isOpen) {
      closeDetailPanel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search, hash]);
  return (
    <S.LayoutContainer>
      <div style={{ gridRow: 1, gridColumn: '1 / span 2' }}>
        <Navbar onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>
      <div style={{ gridRow: 2, gridColumn: 1 }}>
        <Sidebar collapsed={sidebarCollapsed} />
      </div>
      <S.MainContent
        collapsed={sidebarCollapsed}
        hasDetail={detailPanel.isOpen}
        onClick={() =>
          detailPanel.isOpen
            ? undefined
            : setSidebarCollapsed(true)
        }
      >
        <Outlet />
      </S.MainContent>
      {detailPanel.isOpen && (
        <S.DetailPanel>
          <S.DetailHeader>
            <S.CloseButton onClick={closeDetailPanel}>×</S.CloseButton>
          </S.DetailHeader>
          <S.DetailBody>{detailPanel.content}</S.DetailBody>
        </S.DetailPanel>
      )}
    </S.LayoutContainer>
  );
};

const AuthenticatedLayout = () => (
  <LayoutProvider>
    <InnerLayout />
  </LayoutProvider>
);

export default AuthenticatedLayout;