import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SIDEBAR_COLLAPSED_WIDTH = 55;
const SIDEBAR_EXPANDED_WIDTH = 250;

const SidebarContainer = styled.aside<{ $isExpanded: boolean }>`
  position: sticky;
  top: 64px; /* Add this to account for navbar height */
  width: ${({ $isExpanded }) => ($isExpanded ? `${SIDEBAR_EXPANDED_WIDTH}px` : `${SIDEBAR_COLLAPSED_WIDTH}px`)};
  height: calc(100vh - 64px);
  background: #F7F7F7;
  color: #8a8a8a;
  transition: width 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
`;

const ScrollArea = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  ${SidebarContainer}:hover & {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #F7F7F7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #BFBFBF;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 7px 0;
  padding: 0;
`;

const SidebarLink = styled(NavLink)<{ $showLabel: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: inherit;
  text-decoration: none;
  border-top: 1px solid #f2f2f2;
  font-family: 'Strait', sans-serif;
  font-size: 13px;

  &:hover,
  &.active {
    background: #66bb6a; /* green 400 */
    color: #fff;
    font-weight: 600;
  }

  span {
    opacity: ${({ $showLabel }) => ($showLabel ? 1 : 0)};
    transform: translateX(${({ $showLabel }) => ($showLabel ? '0' : '-6px')});
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    white-space: nowrap;
  }
`;

const IconBox = styled.div`
  width: 55px;
  height: 36px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
`;

function MomentosIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 4h16v12H5.17L4 17.17V4z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 16l-4.9 2.3.9-5.6-4-3.9 5.5-.8L12 3z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
    </svg>
  );
}

function MarketplaceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 4h18l-2 10H5L3 4z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
      <path d="M7 20a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
    </svg>
  );
}

function PostingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 5h16M4 12h16M4 19h10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const isExpanded = !collapsed || isHovering;
  const showLabels = isExpanded;

  return (
    <SidebarContainer
      $isExpanded={isExpanded}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Primary navigation"
   >
      <ScrollArea>
        <NavList>
        <li>
          <SidebarLink to="/momentos" $showLabel={showLabels}>
            <IconBox>
              <MomentosIcon />
            </IconBox>
            <span>Momentos</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/services" $showLabel={showLabels}>
            <IconBox>
              <ServicesIcon />
            </IconBox>
            <span>Services</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/marketplace" $showLabel={showLabels}>
            <IconBox>
              <MarketplaceIcon />
            </IconBox>
            <span>Marketplace</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/posting" $showLabel={showLabels}>
            <IconBox>
              <PostingsIcon />
            </IconBox>
            <span>Postings</span>
          </SidebarLink>
        </li>
        </NavList>
      </ScrollArea>
    </SidebarContainer>
  );
};

export default Sidebar;