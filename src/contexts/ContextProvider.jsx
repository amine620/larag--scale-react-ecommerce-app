import React, { createContext, useContext, useState , useEffect , useLayoutEffect , useReducer } from 'react'
import {  } from 'react/cjs/react.production.min';
import { reducer } from './Reducer';


const StateContext = createContext()
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

function ContextProvider({ children }) {

  const [isClicked, dispatch] = useReducer(reducer,initialState);
  
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState("");
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  

useLayoutEffect(()=>{
   setCurrentColor(()=>{
    return localStorage.getItem('colorMode') ?  localStorage.getItem('colorMode') : '#03C9D7'
  })
  setCurrentMode(()=>{
    return localStorage.getItem('themeMode') ?  localStorage.getItem('themeMode') : 'Light'

  })
},[])

  const handleClick = (clicked) => {
    // setisClicked({
    //   ...initialState,
    //   [clicked]: true
    // })
  }

  
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false)

  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false)
  };

  return (
    <StateContext.Provider value={{
      activeMenu,
      isClicked,
      screenSize,
      currentColor,
      currentMode,
      themeSettings,
      setActiveMenu,
      // setisClicked,
      handleClick,
      setScreenSize,
      setCurrentColor,
      setCurrentMode,
      setThemeSettings,
      setColor,
      setMode,
      dispatch
    }}>
      {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = () => useContext(StateContext)