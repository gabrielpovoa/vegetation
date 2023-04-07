import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Global from './styles/Global'
import {BrowserRouter} from 'react-router-dom'
import { Navigation } from './route'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Global />
    <Navigation />
  </BrowserRouter>,
)
