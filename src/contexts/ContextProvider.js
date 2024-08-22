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
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03c9d7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]:true})
  }

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false)
  }
  
  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }

  return (
    <StateContext.Provider 
      value={{ 
        activeMenu, setActiveMenu, 
        isClicked, setIsClicked, 
        handleClick, 
        screenSize, setScreenSize, 
        currentMode, setMode,
        currentColor, setColor, 
        themeSettings, setThemeSettings 
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)