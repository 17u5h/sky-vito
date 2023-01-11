import React from 'react'
import Header from "./Header/Header";
import style from './style.module.css'
import Search from "./Search/Search";
import Ads from "../../components/Ads/Ads";
import {ads} from "../../constants/ads-stub";

const Main = () => {

	return (
		<div className={style.container}>
			<Header isAuth={false}/>
			<Search/>
			<Ads ads={ads}/>
		</div>
	)
}

export default Main
