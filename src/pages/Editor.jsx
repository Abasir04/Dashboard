import React from 'react'

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header 
        category="App"
        title="Editor"
      />
      <RichTextEditorComponent>
        <Inject services={[Link, Image, QuickToolbar, Toolbar, HtmlEditor]} />
        <EditorData height="100%"/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor