import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../../http/interceptors";

const Ad = ({ad}) => {
	const navigate = useNavigate()
	const backgroundImage = {background: `#F0F0F0 url("${API_URL}/${ad.images[0]?.url}") no-repeat center`, backgroundSize: 'cover'}

	return (
		<div className={style.adContainer} onClick={() => navigate(`/adv/${ad.id}`)}>
			<div className={style.img} style={backgroundImage}/>
			<div className={style.title}>{ad.title}</div>
			<div className={style.price}>{`${ad.price} ₽`}</div>
			<div className={style.description}>
				<div className={style.city}>{ad.city}</div>
				<div className={style.time}>{ad.time}</div>
			</div>
		</div>
	);
};

export default Ad;