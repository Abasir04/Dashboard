import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries,  Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

// import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  // const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id="line-chart"
      width="928px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width:0 } }}
      tooltip={{ enable: true }}
      className='flex items-center'
      // background={currentMode === 'Dark' ? '#cdb5e1' : '#fff'}
    >
      <Inject services={[ DateTime, Legend, Tooltip, LineSeries ]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart