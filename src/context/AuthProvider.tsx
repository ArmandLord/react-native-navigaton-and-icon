import React, {FC, useReducer} from 'react';
import {AuthContext} from './AuthContext';
import {authReducer as reducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn?: boolean;
  username?: string;
  favoriteIcon?: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
