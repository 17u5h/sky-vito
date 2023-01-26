import React, {useState} from 'react';
import style from './style.module.css';
import UiButton from "../../../components/UI/UiButton/UiButton";
import {user} from "../../../stubs/userData-stub";
import TitledInput from "./TitledInput/TitledInput";
import {useDispatch, useSelector} from "react-redux";
import {getUserSelector, userAvatarSelector} from "../../../store/selectors/getUserSelector";
import $api, {$fileUpload, API_URL} from "../../../http/interceptors";
import {getUserSuccess} from "../../../store/actionCreators/getUser";


const UserData = () => {
	const userData = useSelector(getUserSelector)
	const userAvatar = useSelector(userAvatarSelector)
	const initialAvatar = {background: `#f0f0f0 url("${API_URL}/${userAvatar}") no-repeat center`}

	const [firstName, setFirstName] = useState(userData.name || '')
	const [lastName, setLastName] = useState(userData.surname || '')
	const [city, setCity] = useState(userData.city || '')
	const [phone, setPhone] = useState(userData.phone || '')
	const [avatar, setAvatar] = useState(initialAvatar)
	const [somethingChanged, setSomethingChanged] = useState(false)

	const dispatch = useDispatch()

	const changeInputHandler = (event) => {
		setSomethingChanged(true)
		switch (event.target.name) {
			case 'firstName': {
				setFirstName(event.target.value)
				break
			}
			case 'lastName': {
				setLastName(event.target.value)
				break
			}
			case 'city': {
				setCity(event.target.value)
				break
			}
			case 'phone': {
				setPhone(event.target.value)
				break
			}
		}
	}

	const changePhoto = async (event) => {
		const file = event.target.files
		const formData = new FormData()
		formData.append('file', file[0])
		const response = await $fileUpload.post('/user/avatar', formData)
		const photo = response.data.avatar
		setAvatar({background: `#f0f0f0 url("${API_URL}/${photo}") no-repeat center`})
		setSomethingChanged(true)
	}

	const fetchNewUserData = async (event) => {
		event.preventDefault()
		const fetchData = {
			role: 'user',
			email: userData.email,
			name: firstName,
			surname: lastName,
			phone,
			city
		}
		try {
			const {data} = await $api.patch('/user', JSON.stringify(fetchData))
			dispatch(getUserSuccess(data))
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>Настройки профиля</h2>
			<div className={style.container}>
				<div className={style.imageBlock}>
					<div className={style.photo} style={avatar}/>
					<label htmlFor='uploadInput' className={style.uploadLabel}>Заменить</label>
					<input type='file' id='uploadInput' className={style.changeButton} onChange={e => changePhoto(e)}/>
				</div>
				<div className={style.inputsBlock}>
					<div className={style.firstAndLastNameBlock}>
						<TitledInput value={firstName}
												 onChange={e => changeInputHandler(e)}
												 name='firstName'>Имя</TitledInput>
						<TitledInput value={lastName}
												 onChange={e => changeInputHandler(e)}
												 name='lastName'>Фамилия</TitledInput>
					</div>
					<TitledInput value={city}
											 onChange={e => changeInputHandler(e)}
											 name='city'>Город</TitledInput>
					<TitledInput value={phone}
											 onChange={e => changeInputHandler(e)}
											 width={'614px'}
											 type={'tel'}
											 name='phone'>Телефон</TitledInput>
					<div className={style.emptySpace}/>
					<UiButton onClick={fetchNewUserData} disabled={!somethingChanged}>Сохранить</UiButton>
				</div>
			</div>
		</div>
	);
};

export default UserData;