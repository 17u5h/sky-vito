import React from 'react';
import style from './style.module.css'
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import ButtonShowTel from "../../components/UI/ButtonShowTel/ButtonShowTel";
import {seller} from "../../stubs/sellerInfo-stub";
import Ads from "../../components/Ads/Ads";
import {useParams} from "react-router-dom";


const SellerProfile = () => {
	const { id } = useParams();

	// const { data, isSuccess, isLoading, isError } = useFetchCoursePageQuery(id);

	const {photo, name, lastName, city, tel, since, ads} = seller
	const isAuth = true
	const backgroundIcon = {background: `#F0F0F0 url("${photo}") no-repeat center`}

	return (
		<div className={style.container}>
			<HeaderWithLogo isAuth={isAuth}/>
			<p className={style.title}>Профиль продавца</p>
			<div className={style.profileBlock}>
				<div className={style.sellerPhoto} style={backgroundIcon}/>
				<div className={style.aboutBlock}>
					<div className={style.infoBlock}>
						<p className={style.name}>{name + ' ' + lastName}</p>
						<p className={style.city}>{city}</p>
						<p className={style.since}>Продает товары с {since}</p>
					</div>
					<ButtonShowTel isAuth={isAuth} tel={tel}/>
				</div>

			</div>
			<div className={style.productBlock}>
				<p className={style.subtitle}>Товары продавца</p>
				<Ads ads={ads}/>
			</div>
		</div>
	);
};

export default SellerProfile;