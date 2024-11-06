import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './CounterApp'
//import App from './App.jsx'
//import FirstApp from './FirstApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp value={0} />
  </StrictMode>,
)
