import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      id='charts'
      width={width}
      height={height}
      tooltip={{ enable: true }}
      title='Stacked Column Chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      LegendSettings={{ background: 'white' }}
    >
      <Inject services={[Category, StackingColumnSeries, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective 
            key={index}
            {...item}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked