import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Teachers from './Teachers.jsx'
 const teachersList=[
  {
    id:1,
    name:"Muhammad",
    lastName: "Qasimi",
    age:27,
    phone:"0798675643",
  }
 ]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Teachers/>
  </StrictMode>,
)
