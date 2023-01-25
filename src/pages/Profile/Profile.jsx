import React from 'react';
import style from './style.module.css';
import {user} from "../../stubs/userData-stub";
import UserData from "./UserData/UserData";
import Ads from "../../components/Ads/Ads";
import {ads} from "../../stubs/ads-stub";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {useSelector} from "react-redux";
import {userNameSelector} from "../../store/selectors/getUserSelector";

const Profile = () => {
	const name = useSelector(userNameSelector)

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