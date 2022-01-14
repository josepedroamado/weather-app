import React, { useState, createContext } from 'react'

export const UserContext = createContext(false)

export const UserContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <UserContext.Provider value={{loggedIn, setLoggedIn}}>
      {props.children}
    </UserContext.Provider>
  )
}