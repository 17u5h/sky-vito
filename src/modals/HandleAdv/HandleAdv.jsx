import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import UiCloseButton from "../../components/UI/UiCloseButton/UiCloseButton";
import AddImages from "./AddImages/AddImages";
import UiButton from "../../components/UI/UiButton/UiButton";
import {$fileUpload} from "../../http/interceptors";
import {createFormData} from "../../lib/createFormData";
import {useDispatch, useSelector} from "react-redux";
import {imagesSelector} from "../../store/selectors/imagesSelector";
import {setAdvImages} from "../../store/actionCreators/advImages";

const HandleAdv = ({closeModal, title, isNew, editData}) => {
	const [formValid, setFormValid] = useState(false)
	const [newTitle, setNewTitle] = useState(editData.title || '')
	const [description, setDescription] = useState(editData.description || '')
	const [price, setPrice] = useState(editData.price || '')

	const dispatch = useDispatch()
	const images = useSelector(imagesSelector)

	useEffect(() => {
		const maxNumberOfPhoto = 5
		const prettyArr = editData.images || []
		while (prettyArr.length < maxNumberOfPhoto) prettyArr.push(null)
		dispatch(setAdvImages(prettyArr))
	},[editData.images])

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
		}
		if (title) setFormValid(true)
	}

	const createImagesRequest = async (images) => {
		const formData = createFormData(images)

		const queryTitle = new URLSearchParams()
		queryTitle.set('title', `${title}`)
		const queryDescription = new URLSearchParams()
		queryDescription.set('description', `${description}`)
		const queryPrice = new URLSearchParams()
		queryPrice.set('price', `${price}`)

		const response = await $fileUpload.post(`ads/?${queryTitle}&${queryDescription}&${queryPrice}`, formData)
		console.log(response.data)
		closeModal()
	}

	const updateImage = async (event, file) => {

		const formData = new FormData()
		formData.append('file', file)


	}

	return (
		<div className={style.container}>
			<div className={style.header}>
				<h2 className={style.title}>{title}</h2>
				<UiCloseButton onClick={() => closeModal()}/>
			</div>
			<div className={style.description}>
				<p>Название</p>
				<input className={style.nameInput} value={newTitle} name='title' placeholder='Введите название'
							 onChange={e => handleChanges(e)}/>
			</div>
			<div className={style.description}>
				<p>Описание</p>
				<textarea className={style.descriptionArea} value={description} name='description'
									placeholder='Введите описание' onChange={e => handleChanges(e)}/>
			</div>
			<div className={style.ImgBlock}>
				<div className={style.signBlock}>
					<p>Фотографии товара</p>
					<p className={style.postSign}>не более 5 фотографий</p>
				</div>

				<AddImages name='images' isNew={isNew} />

			</div>
			<div className={style.priceBlock}>
				<p>Цена</p>
				<div className={style.priceInputField}>
					<input className={style.priceInput} value={price} name='price'
								 onChange={e => handleChanges(e)}/>
					<p>₽</p>
				</div>
			</div>
			<div className={style.buttonPosition}>
				{isNew ?
					<UiButton disabled={!formValid} onClick={() => createImagesRequest(images)}>Опубликовать</UiButton>
					:
					<UiButton disabled={!formValid}>Сохранить</UiButton>
				}
			</div>
		</div>
	);
};

export default HandleAdv;