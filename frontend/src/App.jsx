import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Header from './component/Header'
import MinatPage from './page/MinatPage'
import Footer from './component/Footer'
import AboutPage from './page/AboutPage'
import DetailUkm from './detail/DetailUkm'




export default function App() {


  return (
    <Router>
            <Header/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/minat' element={<MinatPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/detailUkm/:nama' element={<DetailUkm/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
