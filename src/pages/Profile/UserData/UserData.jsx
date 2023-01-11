import React from 'react';
import style from './style.module.css';
import UiButton from "../../../components/UI/UiButton/UiButton";


const UserData = () => {
	return (
		<div className={style.wrapper}>
			<h2 className={style.title}>Настройки профиля</h2>
			<div className={style.container}>
				<div className={style.imageBlock}>
					<div className={style.photo}/>
					<div className={style.changeButton}/>
				</div>
				<div className={style.inputsBlock}>
					<div className={style.firstAndLastNameBlock}>
						<div className={style.inputBlock}>
							<div className={style.inputTitle}>Имя</div>
							<input className={style.input}/>
						</div>
						<div className={style.inputBlock}>
							<div className={style.inputTitle}>Фамилия</div>
							<input className={style.input}/>
						</div>
					</div>
					<div className={style.inputBlock}>
						<div className={style.inputTitle}>Город</div>
						<input className={style.input}/>
					</div>
					<div className={style.inputBlock}>
						<div className={style.inputTitle}>Телефон</div>
						<input className={style.input}/>
					</div>
					<UiButton>Сохранить</UiButton>
				</div>
			</div>
		</div>
	);
};

export default UserData;