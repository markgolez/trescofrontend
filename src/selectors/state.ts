// src/selectors/state.ts
import { RootState } from '../store';

export const getAuthentication = (state: RootState) => state.auth;
export const getSelf = (state: RootState) => state.auth.user; // Or wherever user data lives