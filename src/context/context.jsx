import { createContext, useState } from 'react'

export const MyContext = createContext()

const UserProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </MyContext.Provider>
  )
}

export default UserProvider