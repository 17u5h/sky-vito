import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import Main from "../pages/Main/Main";


const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
