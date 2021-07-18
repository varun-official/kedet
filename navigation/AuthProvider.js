import React, {useState, useEffect, createContext} from 'react';

//import auth

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(true);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
