// hooks/useAuth.ts
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useIsAuthenticated = () => {
    return useSelector((state: RootState) => state.auth.isAuthenticated);
  };