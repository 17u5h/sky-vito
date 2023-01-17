import React from 'react';
import style from './style.module.css'
import {useNavigate} from "react-router-dom";
import ButtonShowTel from "../../../components/UI/ButtonShowTel/ButtonShowTel";


const SellerInfo = ({seller}) => {
	const {id, photo, tel, name, since} = seller
	const navigate = useNavigate()
	const isAuth = true

	const backgroundIcon = {background: `#F0F0F0 url("${photo}") no-repeat center`}

	return (
		<div className={style.container}>
			<ButtonShowTel tel={tel} isAuth={isAuth}/>
			<div className={style.sellerInfo}>
				<div className={style.sellerIcon} style={backgroundIcon}/>
				<div className={style.sellerAbout}>
					<p className={style.sellerName} onClick={() => navigate(`/seller-profile:${id}`)}>{name}</p>
					<p className={style.since}>Продает товары с {since}</p>
				</div>
			</div>
		</div>
	);
};

export default SellerInfo;