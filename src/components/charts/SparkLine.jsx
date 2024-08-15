import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, type, data, color, currentColor}) => {
  return (
    <SparklineComponent
      id={id}
      xName="x"
      yName="y"
      type={type}
      fill={color}
      width={width}
      lineWidth={1}
      height={height}
      dataSource={data}
      valueType="Numeric"
      border={{ color: currentColor, width:2 }}
      tooltipSetting={{ visible: true, format: '${x} : data ${y}', trackLineSetting: { visible: true } }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine