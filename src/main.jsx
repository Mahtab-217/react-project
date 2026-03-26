import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Teachers from './Teachers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Teachers/>
  </StrictMode>,
)
