import React from 'react';
import style from './style.module.css';
import {user} from "../../constants/userData-stub";
import UserData from "./UserData/UserData";
import Ads from "../../components/Ads/Ads";
import {ads} from "../../constants/ads-stub";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";

const Profile = () => {
	const name = user.firstName || 'Пользователь'

	return (
		<div className={style.container}>
			<HeaderWithLogo isAuth={true} />
			<h1 className={style.greetings}>{`Здравствуйте, ${name}!`}</h1>
			<UserData/>
			<p className={style.subtitle}>Мои товары</p>
			<Ads ads={ads}/>
		</div>
	);
};

export default Profile;