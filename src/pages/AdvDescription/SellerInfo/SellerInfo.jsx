import React, {useState} from 'react';
import style from './style.module.css'
import UiButton from "../../../components/UI/UiButton/UiButton";


const SellerInfo = ({seller}) => {
	const {icon, tel, name, date} = seller

	const [visibleTel, setVisibleTel] = useState('8 XXX XXX XX XX')

	const showTel = (rawTel) => {
		const telArr = rawTel.split('')
		telArr.splice(-2, 0, ' ')
		telArr.splice(-5, 0, ' ')
		telArr.splice(-9, 0, ' ')
		telArr.splice(-13, 0, ' ')
		const prettyTel = telArr.join('')
		setVisibleTel(prettyTel)
	}

	const backgroundIcon = {background: `#F0F0F0 url("${icon}") no-repeat center`}

	return (
		<div className={style.container}>
			<UiButton onClick={() => showTel(tel)}>
				<p>Показать телефон</p>
				<p>{visibleTel}</p>
			</UiButton>
			<div className={style.sellerInfo}>
				<div className={style.sellerIcon} style={backgroundIcon}/>
				<div className={style.sellerAbout}>
					<p className={style.sellerName}>{name}</p>
					<p className={style.date}>Продает товары с {date}</p>
				</div>
			</div>
		</div>
	);
};

export default SellerInfo;