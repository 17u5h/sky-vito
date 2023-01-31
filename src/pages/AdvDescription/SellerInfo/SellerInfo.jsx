import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import {useNavigate} from "react-router-dom";
import ButtonShowTel from "../../../components/UI/ButtonShowTel/ButtonShowTel";
import {useSelector} from "react-redux";
import {authSelector} from "../../../store/selectors/authSelector";
import $api, {API_URL} from "../../../http/interceptors";
import {monthConverter} from "../../../lib/monthConverter";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";


const SellerInfo = ({adData}) => {
	// const {id, photo, tel, name, since} = seller
	const initialSellerData = {
		// name: '',
		// city: '',
		// avatar: '',
		// sells_from: '',
		// surname: ''
	}
	const navigate = useNavigate()
	const isAuth = useSelector(authSelector)
	const [sellerName, setSellerName] = useState('')
	const [since, setSince] = useState('')
	const [tel, setTel] = useState('')
	const [avatar, setAvatar] = useState('')


	useEffect(() => {
		setSellerName(adData.user?.name)
		if (adData?.user) {
			setSince(monthConverter(adData.user?.sells_from))
			setAvatar(adData.user?.avatar)
		}
		setTel(adData.user?.phone)
	}, [adData?.user])


	const backgroundIcon = {background: `#F0F0F0 url("${API_URL}/${avatar}") no-repeat center`}

	return (
		<div className={style.container}>
			<ButtonShowTel tel={tel} isAuth={isAuth}/>
			<div className={style.sellerInfo}>
				<div className={style.sellerIcon} style={backgroundIcon}/>
				<div className={style.sellerAbout}>
					<p className={style.sellerName} onClick={() => {
					}}>{sellerName}</p>
					<p className={style.since}>Продает товары с {since}</p>
				</div>
			</div>
		</div>
	);
};

export default SellerInfo;