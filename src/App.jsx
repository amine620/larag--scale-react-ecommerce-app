import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {FiSettings} from "react-icons/fi"
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'


function App() {
  const activeMenu=true
  return (
   <BrowserRouter>
     <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{zIndex:1000}}>
         <TooltipComponent content={"Settings"} position={"Top"}>
            <button type='button' style={{background:"blue",borderRadius:"50%"}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'>
              <FiSettings />
            </button>
         </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark bg-white'>
          Sidebare
        </div>
      ):(
        <div className='w-0 dark:bg-secondary-dark-bg'>sidebar</div>
      )}
      <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`  }>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
             navbar
          </div>
      </div>
      <div>
        <Routes>
          {/* Dashboard */}
          <Route path='/' element="Ecommerce" />
          <Route path='/ecommerce' element="Ecommerce" />

          {/* Pages */}
           <Route path='/orders' element='Pages' />
           <Route path='/employees' element='Employees' />
           <Route path='/customers' element='Customers' />

           {/* Apps */}
           <Route path='/kanban' element='Kanban' />
           <Route path='/editor' element='Editor' />
           <Route path='/calndar' element='Calndar' />
           <Route path='/color-picker' element='ColorPicker' />

           {/* charts */}
           <Route path='/line' element='Line' />
           <Route path='/area' element='Area' />
           <Route path='/bar' element='Bar' />
           <Route path='/financial' element='Financial' />
           <Route path='/color-mapping' element='ColorMapping' />
           <Route path='/pyramid' element='Pyramid' />
           <Route path='/stacked' element='Stacked' />


        </Routes>
      </div>
     </div>
   </BrowserRouter>
  )
}

export default App