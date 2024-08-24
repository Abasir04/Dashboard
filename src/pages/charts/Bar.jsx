import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DataLabel, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { ChartsHeader} from '../../components'

const Bar = () => {
  return (
    <div className="m-3 md:m-10 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader 
        category="Bar"
        title="Olympic Medal Counts Rio"
      />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          width="928px"
          tooltip={{ enable: true }}
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width:0 } }}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ ColumnSeries, Legend, Tooltip, Category, DataLabel ]}/>
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => 
              <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar