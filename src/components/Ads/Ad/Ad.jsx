import React from 'react';
import style from './style.module.css'

const Ad = ({ad}) => {
	const backgroundImage = {background: `#F0F0F0 url("${ad.img}") no-repeat center`}
	return (
		<div className={style.adContainer}>
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