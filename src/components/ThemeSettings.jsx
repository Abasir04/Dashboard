/* eslint-disable array-callback-return */
import React from 'react'

import { BsCheck } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 dark:[#484b52] bg-white w-400">

        {/* Settings Header */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">
            Settings
          </p>
          <button 
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{
              color: 'rgb(153, 171, 180)',
              borderRadius: '50%'
            }}
            className="text-xl p-3 hover:drop-shadow-lg hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        
        {/* Theme Modes */}
        <div className="flex-col border-t-1 border-color p-4 mx-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input 
              id="light" 
              type="radio" 
              name="theme" 
              value="Light" 
              onChange={setMode} 
              checked={currentMode === 'Light'}
              className="cursor-pointer" 
            />
            <label 
              htmlFor="light"
              className="ml-2 text-md cursor-pointer"
            >
              Light
            </label>
          </div>
          <div className="mt-4">
            <input 
              id="dark" 
              type="radio" 
              name="theme" 
              value="Dark" 
              onChange={setMode}
              checked={currentMode === 'Dark'}
              className="cursor-pointer" 
            />
            <label 
              htmlFor="dark"
              className="ml-2 text-md cursor-pointer"
            >
              Dark
            </label>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="flex-col border-t-1 border-color p-4 mx-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent 
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    style={{ backgroundColor: item.color }}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThemeSettings