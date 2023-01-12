import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";


const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
