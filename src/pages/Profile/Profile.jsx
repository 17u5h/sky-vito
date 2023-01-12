import React from 'react';
import style from './style.module.css';
import Header from "../Main/Header/Header";
import LogoPic from "../../components/Logo/LogoPic";
import UiButton from "../../components/UI/UiButton/UiButton";
import {user} from "../../constants/userData-stub";
import UserData from "./UserData/UserData";
import Ads from "../../components/Ads/Ads";
import {ads} from "../../constants/ads-stub";

const Profile = () => {
	const name = user.firstName || 'Пользователь'

	return (
		<div className={style.container}>
			<Header isAuth={true}/>
			<div className={style.topBlock}>
				<LogoPic/>
				<UiButton>Вернуться на главную</UiButton>
			</div>
			<h1 className={style.greetings}>{`Здравствуйте, ${name}!`}</h1>
			<UserData/>
			<Ads ads={ads}/>
		</div>
	);
};

export default Profile;