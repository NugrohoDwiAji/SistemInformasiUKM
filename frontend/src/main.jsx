import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import AboutPage from './page/aboutpages'
import DaftarUKM from './page/daftarukm'

const router = createBrowserRouter([
  {path:"/",element:<LandingPage/>},
  { path: "/about", element: <AboutPage /> },
  { path: "/daftarukm", element: <DaftarUKM/> }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
