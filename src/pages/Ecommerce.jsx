import React from 'react'

// import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";


import { Stacked, Button } from '../components'
import { earningData, SparklineAreaData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  const { currentColor } = useStateContext()

  return (
    <div className="pt-6 dark:bg-slate-400">

      {/* Top Box */}
      <div className="flex flex-wrap lg:flex-nowrap xl:mx-auto justify-content">

        {/* Main Data */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg flex-auto h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Earnings</p>
              <p className="text-2xl dark:text-gray-800">$65,420</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size='md'
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>

        {/* Sub Data */}
        <div className="flex w- full m-3 flex-wrap justify-center gap-6 items-center">
          {earningData.map((item) => (
            <div 
              key={item.title}
              className="bg-gray-200 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-60 p-4 pt-9 rounded-2xl"
            >
              <button 
                type="button"
                style={{color: item.iconColor, backgroundColor: item.iconBg}}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm ml-2 text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-white mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Box */}
      <div className="flex gap-10 flex-wrap justify-center">

        <div className="bg-gray-200 dark:bg-text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">

          {/* Header */}
          <div className="flex justify-between m-3">
            <p className="font-semibold text-xl">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-white hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">

            {/* Left Content */}
            <div className="border-r-1 border-color m-4 pr-10">

              {/* MiniData */}
              <div>
                <p>
                  <span className="text-3xl font-semibold">
                    $94,620
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    %29
                  </span>
                </p>
                <p className="text-gray-500 dark:text-white mt-1">
                  Budget
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">
                    $34,620
                  </span>
                </p>
                <p className="text-gray-500 dark:text-white mt-1">
                  Expenses
                </p>
              </div>

              {/* sparkline chart */}
              <div className="mt-5">
                <sparkLine 
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Download"
                  borderRadius="10px"
                />
              </div>

            </div>
            
            {/* Right Content */}
            <div>
              <Stacked 
                width="320px"
                height="360px"
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Ecommerce