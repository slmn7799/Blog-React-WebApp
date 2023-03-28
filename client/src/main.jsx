import React from 'react'
import {ReactDOM, createRoot }from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/Context'

const root = createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
       <App />
    </ContextProvider>
  </React.StrictMode>
);
