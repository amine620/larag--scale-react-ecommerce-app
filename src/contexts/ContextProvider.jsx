import React , {createContext , useContext , useState } from 'react'


const StateContext=createContext()
const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

function ContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(initialState);

    const handleClick=(clicked)=>{
           setisClicked({
               ...initialState,
               [clicked]:true
           })
    }

  return (
    <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setisClicked,handleClick,screenSize,setScreenSize}}>
        {children}
    </StateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext=()=>useContext(StateContext)