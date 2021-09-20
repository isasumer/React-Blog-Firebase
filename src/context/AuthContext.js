import React, { useState, createContext } from 'react';

// Our Header Context
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authInfo, setAuthInfo] = useState("first context")

  
  return (
    <AuthContext.Provider value={{
      authInfo:authInfo,
      setAuthInfo: setAuthInfo
    }}>
      {props.children}
    </AuthContext.Provider >
  )
}