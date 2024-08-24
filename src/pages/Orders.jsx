import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='mx-0.5 my-1 md:m-10 py-1 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl overflow-x-hidden'>
      <Header 
        category="Page"
        title="Orders"
      />
      <GridComponent
        id="gridcomponent"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective 
            key={index} 
            {...item}
          />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Edit, Page, ContextMenu, Filter, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders