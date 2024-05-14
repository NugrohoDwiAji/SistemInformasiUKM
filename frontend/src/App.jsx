import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Header from './component/Header'
import MinatPage from './page/MinatPage'
import Footer from './component/Footer'

export default function App() {
  return (
    <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/minat' element={<MinatPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
