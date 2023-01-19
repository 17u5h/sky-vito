import React, {useState} from 'react';
import style from './style.module.css'
import UiCloseButton from "../../components/UI/UiCloseButton/UiCloseButton";
import AddImages from "./AddImages/AddImages";
import UiButton from "../../components/UI/UiButton/UiButton";

const HandleAdv = ({closeModal, title, isNew, editData}) => {
	const [formValid, setFormValid] = useState(false)
	const [newTitle, setNewTitle] = useState(editData.title)
	const [description, setDescription] = useState(editData.description)
	const [price, setPrice] = useState(editData.price)
	const [images, setImages] = useState(editData.images)

	const handleChanges = (event) => {
		const value = event.target.value
		switch (event.target.name) {
			case 'title':
				setNewTitle(value)
				break
			case 'description':
				setDescription(value)
				break
			case 'price':
				setPrice(value)
				break
			case 'images':
				setImages(value)
				break
		}
	}

	return (
		<div className={style.container}>
			<div className={style.header}>
				<h2 className={style.title}>{title}</h2>
				<UiCloseButton onClick={() => closeModal()}/>
			</div>
			<div className={style.description}>
				<p>Название</p>
				<input className={style.nameInput} value={newTitle || ''} name='title' placeholder='Введите название'
							 onChange={e => handleChanges(e)}/>
			</div>
			<div className={style.description}>
				<p>Описание</p>
				<textarea className={style.descriptionArea} value={description || ''} name='description'
									placeholder='Введите описание' onChange={e => handleChanges(e)}/>
			</div>
			<div className={style.ImgBlock}>
				<div className={style.signBlock}>
					<p>Фотографии товара</p>
					<p className={style.postSign}>не более 5 фотографий</p>
				</div>
				<div className={style.images}>
					<AddImages pictures={images} name='images' onChange={e => handleChanges(e)}/>
				</div>
			</div>
			<div className={style.priceBlock}>
				<p>Цена</p>
				<div className={style.priceInputField}>
					<input className={style.priceInput} value={price || ''} name='price'
								 onChange={e => handleChanges(e)}/>
					<p>₽</p>
				</div>
			</div>
			<div className={style.buttonPosition}>
				{isNew ?
					<UiButton disabled={!formValid}>Опубликовать</UiButton>
					:
					<UiButton disabled={!formValid}>Сохранить</UiButton>
				}
			</div>
		</div>
	);
};

export default HandleAdv;