import React from 'react';
import style from './style.module.css'
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../../http/interceptors";
import {getPrettyDateAndTime} from "../../../lib/getPrettyDateAndTime";

const Ad = ({ad}) => {
	const navigate = useNavigate()

	const backgroundImage = {
		background: `#F0F0F0 url("${API_URL}/${ad.images[0]?.url}") no-repeat center`,
		backgroundSize: 'cover'
	}

	const cutTitle = ad.title.slice(0, 40)

	console.log(ad)
	return (
		<div className={style.adContainer} onClick={() => navigate(`/adv/${ad.id}`)}>
			<div className={style.img} style={backgroundImage}/>
			<div className={style.title}>{cutTitle}</div>
			<div className={style.price}>{`${ad.price} ₽`}</div>
			<div className={style.description}>
				<div className={style.city}>{ad.user.city}</div>
				<div className={style.time}>{getPrettyDateAndTime(ad.created_on)}</div>
			</div>
		</div>

	);
};

export default Ad;