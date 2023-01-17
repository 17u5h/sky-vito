import React from 'react';
import style from './style.module.css'
import UiButton from "../../../components/UI/UiButton/UiButton";


const MyInfo = ({user}) => {

	const {firstName, date, img} = user

	const backgroundIcon = {background: `#F0F0F0 url("${img}") no-repeat center`}

	return (
		<div className={style.container}>
			<div className={style.buttonBlock}>
				<UiButton>Редактировать</UiButton>
				<UiButton>Снять с публикации</UiButton>
			</div>
			<div className={style.myInfo}>
				<div className={style.myIcon} style={backgroundIcon}/>
				<div className={style.about}>
					<p className={style.name}>{firstName}</p>
					<p className={style.since}>Продает товары с {date}</p>
				</div>
			</div>
		</div>
	);
};

export default MyInfo;