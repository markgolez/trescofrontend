import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/index';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #e8f4fa;
  color: #0f2540;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 120px; /* Ensure space for logo and menu button */
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 0;
  height: 100%;
  margin: 0 auto; /* Center the nav links */
  padding: 0 1rem;

  a {
    color: #536471;
    text-decoration: none;
    padding: 0 12px;
    height: 100%;
    text-transform: uppercase;
    font-family: 'Titillium Web', sans-serif;
    font-size: 13px;
    border-left: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  a:hover {
    background: #66bb6a;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  height: 100%;
  min-width: 100px; /* Ensure space for login/logout button */

  a, button {
    color: #536471;
    background: transparent;
    border: none;
    text-decoration: none;
    padding: 0 12px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: 'Titillium Web', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    border-left: 1px solid #f2f2f2;
    white-space: nowrap;
  }

  a:hover, button:hover {
    background: #66bb6a;
    color: #fff;
  }

  @media (max-width: 400px) {
    a, button {
      padding: 0 8px;
      font-size: 12px;
    }
  }
`;

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();

  console.log('[Navbar] Authentication status:', isAuthenticated);
  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    // Update Redux state
    dispatch(logout());
  };

  return (
    <NavbarContainer>
      <LeftSection>
        <MenuButton onClick={onMenuToggle}>☰</MenuButton>
        <Logo to="/">Tresco</Logo>
      </LeftSection>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/wallets">Wallets</Link>
        <Link to="/profile">Profile</Link>
      </NavLinks>
      <RightSection>
        {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <Link to="/sign-in">Login</Link>}
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;