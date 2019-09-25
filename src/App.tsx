import React, { createContext, useReducer } from 'react';

import Root from './Root';

export const UserContext = createContext({});

export interface IUser {
  email: string;
}

interface IAction {
  type: string;
  payload?: IUser;
}

export interface IUserContext {
    user?: IUser
    userDispatch?: () => {};
}

const App: React.FC = () => {
  const initialUserState: IUser = {
    email: '',
  }

  const userReducer = (state: IUser, action: IAction) => {
    switch (action.type) {
      case 'login': {
        return { ...state,}
      }
      default: {
        throw new Error(`unexpected action.type: ${action.type}`)
      }
    }
  }

  const [user, userDispatch] = useReducer(userReducer, initialUserState)
  const context = {
    user,
    userDispatch,
  }
  return (

    <>
      <UserContext.Provider value={{ context }} >
        <Root />
      </UserContext.Provider>
    </>
  );
}

export default App;
