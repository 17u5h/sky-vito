import React, {useEffect, useState} from 'react'
import Header from "./Header/Header";
import style from './style.module.css'
import Search from "./Search/Search";
import Ads from "../../components/Ads/Ads";
import $api from "../../http/interceptors";

const Main = ({isAuth}) => {
	const [ads, setAds] = useState([])

	const fetchAllAds = async () => {
		const {data} = await $api.get(`/ads/?sorting=new`)
		setAds(data)
	}

	useEffect(() => {
		fetchAllAds()
	}, [])

	return (
		<div className={style.container}>
			<Header isAuth={isAuth}/>
			<Search/>
			<Ads ads={ads}/>
		</div>
	)
}

export default Main
