import React, { createContext, useContext, useState } from 'react'

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}
const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)