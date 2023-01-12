import React, {useEffect, useState} from 'react';
import style from './style.module.css';
import UiButton from "../../../components/UI/UiButton/UiButton";
import {user} from "../../../constants/userData-stub";
import TitledInput from "./TitledInput/TitledInput";


const UserData = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [city, setCity] = useState('')
	const [tel, setTel] = useState('')
	const [photo, setPhoto] = useState({})

	useEffect(() => {
		setPhoto({background: `#f0f0f0 url("${user.img}") no-repeat center`})
	}, [])


	const changePhoto = () => {}

	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>Настройки профиля</h2>
			<div className={style.container}>
				<div className={style.imageBlock}>
					<div className={style.photo} style={photo}/>
					<div className={style.changeButton} onClick={changePhoto}>Заменить</div>
				</div>
				<div className={style.inputsBlock}>
					<div className={style.firstAndLastNameBlock}>
						<TitledInput value={firstName} onChange={e => setFirstName(e.target.value)}>Имя</TitledInput>
						<TitledInput value={lastName} onChange={e => setLastName(e.target.value)}>Фамилия</TitledInput>
					</div>
					<TitledInput value={city} onChange={e => setCity(e.target.value)}>Город</TitledInput>
					<TitledInput value={tel} onChange={e => setTel(e.target.value)} width={'614px'} type={'tel'}>Телефон</TitledInput>

					<UiButton>Сохранить</UiButton>
				</div>
			</div>
		</div>
	);
};

export default UserData;