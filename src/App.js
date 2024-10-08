/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Line, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'

import './App.css'
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { activeMenu, currentColor, themeSettings, setThemeSettings, currentMode } = useStateContext()

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}

          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />}/>
                <Route path="/ecommerce" element={<Ecommerce />}/>

                {/* pages */}
                <Route path="/orders" element={<Orders />}/>
                <Route path="/employees" element={<Employees />}/>
                <Route path="/customers" element={<Customers />}/>

                {/* apps */}
                <Route path="/kanban" element={<Kanban />}/>
                <Route path="/editor" element={<Editor />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/color-picker" element={<ColorPicker />}/>

                {/* charts */}
                <Route path="/line" element={<Line />}/>
                <Route path="/area" element={<Area />}/>
                <Route path="/bar" element={<Bar />}/>
                <Route path="/pie" element={<Pie />}/>
                <Route path="/financial" element={<Financial />}/>
                <Route path="/color-mapping" element={<ColorMapping />}/>
                <Route path="/pyramid" element={<Pyramid />}/>
                <Route path="/stacked" element={<Stacked />}/>
              </Routes>
            </div>
          </div>

          <div className='fixed right-4 bottom-4' style={{ zIndex: "10" }}>
            <TooltipComponent content='Settings' position='Top'>
              <button 
                type='button' 
                style={{ background: currentColor, borderRadius: '50%' }}
                className='text-2xl p-3 mx-2 hover:drop-shadow-xl hover:bg-light-gray text-black' 
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> 

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App