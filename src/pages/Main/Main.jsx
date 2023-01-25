import React from 'react'
import Header from "./Header/Header";
import style from './style.module.css'
import Search from "./Search/Search";
import Ads from "../../components/Ads/Ads";
import {ads} from "../../stubs/ads-stub";
import {useSelector} from "react-redux";

const Main = ({isAuth}) => {

	return (
		<div className={style.container}>
			<Header isAuth={isAuth}/>
			<Search/>
			<Ads ads={ads}/>
		</div>
	)
}

export default Main
