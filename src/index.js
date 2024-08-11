import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { StateContextProvider } from './contexts/ContextProvider'

ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById('root')
)