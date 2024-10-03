import React, { createContext, useReducer } from 'react';
import reducer from './Loginreducer';

const LoginContext = createContext({
  modalOpen: {
    signin: false,
    signup: false,
    forgetpass: false,
    code: false,
    changepass: false
  },
  dispatch: () => { }
})

export { LoginContext }
export default function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    signin: false,
    signup: false,
    forgetpass: false,
    code: false,
    changepass: false
  });
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
