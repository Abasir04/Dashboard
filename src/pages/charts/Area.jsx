import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries,  Inject, DateTime, Legend } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { ChartsHeader} from '../../components'

const Area = () => {
  return (
    <div className="m-3 md:m-10 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader 
        category="Area"
        title="Inflation Rate in Percentage"
      />
      <div className="w-full">
        <ChartComponent
            id="area-chart"
            width="928px"
            tooltip={{ enable: true }}
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width:0 } }}
            legendSettings={{ background: 'white' }}
          >
            <Inject services={[ DateTime, Legend, SplineAreaSeries ]}/>
            <SeriesCollectionDirective>
              {areaCustomSeries.map((item, index) => 
                <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
          </ChartComponent>
      </div>
    </div>
  )
}

export default Area