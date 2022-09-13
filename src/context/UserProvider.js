import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
  const [user, setUser] = useState(false);
  const navegate = useNavigate()
  
  const signIn = () => {
    setUser(true);
    navegate("/")
  }

  const signOut = () => {
    setUser(false);
  }

  return (
    <UserContext.Provider value={{user, signIn, signOut}}>
      {props.children}
    </UserContext.Provider>
  )
}
