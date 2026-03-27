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
  },
  {
    id:2,
    name:"Muhammad Aman",
    lastName: "Yawari",
    age:17,
    phone:"0798484843",
  },
  {
    id:3,
    name:"Muhammad Qasim",
    lastName: "Madad Zada",
    age:23,
    phone:"07984847382",
  },
  {
    id:4,
    name:"Ali",
    lastName: "Gholami",
    age:28,
    phone:"0798690784",
  },
 ]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Teachers/>
  </StrictMode>,
)
