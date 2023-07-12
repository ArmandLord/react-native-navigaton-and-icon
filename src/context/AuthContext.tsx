import {createContext} from 'react';

export interface AuthContextProps {
  isLoggedIn?: boolean;
  username?: string;
  favoriteIcon?: string;
  signIn?: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
