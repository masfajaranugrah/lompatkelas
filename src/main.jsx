import React,{lazy} from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
const App = lazy(() => import('./App.jsx'))
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
