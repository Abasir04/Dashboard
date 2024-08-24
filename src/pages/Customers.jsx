import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Selection, Sort, Filter, Edit, Toolbar, Inject } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-1 md:m-10 p-1 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header 
        category="Page"
        title="Customers"
      />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Search']}
        editSettings={{ allowDeleting:true, allowEditing:true }}
      >
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective 
            key={index} 
            {...item}
          />
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Selection, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Customers