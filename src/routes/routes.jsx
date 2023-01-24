import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProtectedRoute from "./ProtectedRoute";
import NotFound from '../pages/NotFound/NotFound'
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import AdvDescription from "../pages/AdvDescription/AdvDescription";
import SellerProfile from "../pages/SellerProfile/SellerProfile";

const AppRoutes = () => {

	const isAuth = true

	return (
		<Routes>
			<Route path="/" element={<Main isAuth={isAuth}/>}/>
			<Route path="adv" element={<AdvDescription isSeller={true}/>}/>

			<Route element={<ProtectedRoute isAuth={isAuth}/>}>
				<Route path="profile" element={<Profile/>}/>
				<Route path="seller-profile:23" element={<SellerProfile/>}/>
			</Route>

			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default AppRoutes
