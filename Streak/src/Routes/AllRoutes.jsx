import React from 'react'
import {Routes,Route} from "react-router-dom"
import Random from '../Pages/Random';
import Home from '../Pages/Home';
// import Home from '../Pages/Home';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/random' element={<Random/>} />
    </Routes>
  )
}

export default AllRoutes