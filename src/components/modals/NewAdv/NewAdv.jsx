import React, {useState} from 'react';
import style from './style.module.css'
import UiCloseButton from "../../UI/UiCloseButton/UiCloseButton";
import AddImages from "./AddImages/AddImages";
import UiButton from "../../UI/UiButton/UiButton";

const NewAdv = ({closeModal}) => {
	const [formValid, setFormValid] = useState(false)


	return (
		<div className={style.container}>
			<div className={style.header}>
				<h2 className={style.title}>Новое объявление</h2>
				<UiCloseButton onClick={() => closeModal()}/>
			</div>
			<div className={style.description}>
				<p>Название</p>
				<input className={style.nameInput} placeholder='Введите название'/>
			</div>
			<div className={style.description}>
				<p>Описание</p>
				<textarea className={style.descriptionArea} placeholder='Введите описание'/>
			</div>
			<div className={style.ImgBlock}>
				<div className={style.signBlock}>
					<p>Фотографии товара</p>
					<p className={style.postSign}>не более 5 фотографий</p>
				</div>
				<div className={style.images}>
					<AddImages/>
				</div>
			</div>
			<div className={style.priceBlock}>
				<p>Цена</p>
				<div className={style.priceInputField}>
					<input className={style.priceInput}/>
					<p>₽</p>
				</div>
			</div>
			<div className={style.buttonPosition}>
				<UiButton disabled={!formValid}>Опубликовать</UiButton>
			</div>
		</div>
	);
};

export default NewAdv;