import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./ProtectedRoute";
import NotFound from '../pages/NotFound/NotFound'
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import AdvDescription from "../pages/AdvDescription/AdvDescription";
import SellerProfile from "../pages/SellerProfile/SellerProfile";
import MyAdv from "../pages/MyAdv/MyAdv";

const AppRoutes = () => {

  const isAuth = true

  return (
    <Routes>
      <Route path="/" element={<AdvDescription isSeller={true}/>} />
      <Route path="adv:id" element={<AdvDescription />} />

      <Route element={<ProtectedRoute isAuth={isAuth}/>}>
        <Route path="profile" element={<Profile />}/>
        <Route path="seller-profile" element={<SellerProfile />} />
        <Route path="myadv" element={<MyAdv/>}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
