import React, {useEffect, useState} from 'react'
import Header from "./Header/Header";
import style from './style.module.css'
import Search from "./Search/Search";
import Ads from "../../components/Ads/Ads";
import $api from "../../http/interceptors";
import AdSkeletons from "../../components/UI/AdSkeletons/AdSkeletons";

const Main = ({isAuth}) => {
	const [ads, setAds] = useState([])
	const [loading, setLoading] = useState(false)

	const fetchAllAds = async () => {
		setLoading(true)
		const {data} = await $api.get(`/ads/?sorting=new`)
		setAds(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchAllAds()
	}, [])

	return (
		<div className={style.container}>
			<Header isAuth={isAuth}/>
			<Search/>
			{loading ? <AdSkeletons/> : <Ads ads={ads}/>}
		</div>
	)
}

export default Main
