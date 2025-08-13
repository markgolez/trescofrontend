import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as S from './Styles';
import { LayoutProvider, useLayout } from '../../contexts/LayoutContext';

const InnerLayout = () => {
  const { sidebarCollapsed, setSidebarCollapsed, detailPanel, closeDetailPanel } = useLayout();
  return (
    <S.LayoutContainer>
      <Navbar onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <Sidebar collapsed={sidebarCollapsed} />
      <S.MainContent collapsed={sidebarCollapsed} hasDetail={detailPanel.isOpen}>
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