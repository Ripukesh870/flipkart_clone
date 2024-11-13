import React from 'react'
// import Login from './component/Login'
import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Grocery from './component/Grocery'
import Gview_page from './component/Gview_page'

function App1() {
  return (
    <>
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Grocery' element={<Grocery />} />
            <Route path='/electronic' element={<Home />} />
            <Route path='/laptop_&_pcs' element={<Home />} />
            <Route path='/Mobile_phone' element={<Home />} />
            <Route path='Glocery/Bananas' element={<Gview_page/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
      {/* <Header />
      <Home /> */}

    </>
  )
}

export default App1;
