import { createContext } from 'react';
import { User } from '../types/User';

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<UserContextType | undefined>(
  undefined
);
