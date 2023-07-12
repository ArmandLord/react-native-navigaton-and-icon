import {AuthState} from './AuthProvider';

type AuthAction = {type: 'signIn'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };

    default:
      return state;
  }
};
