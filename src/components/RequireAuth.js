import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

export const RequireAuth = ({children}) => {
  // me traigo el user del Userprovider
  const{user} = useContext(UserContext) 
  
  // verifico que si es falso, no esta autenticado lo mando al login
  if(!user) {
    return <Navigate to="/login" />
  }
  // en caso contrario lo mando al children= hijo al cual se estaba dirigiendo  
  return children
}
