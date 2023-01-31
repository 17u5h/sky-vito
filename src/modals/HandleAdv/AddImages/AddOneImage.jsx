import React from 'react';
import style from "./style.module.css";
import {useDispatch, useSelector} from "react-redux";
import {imagesSelector} from "../../../store/selectors/imagesSelector";
import {setAdvImages} from "../../../store/actionCreators/advImages";
import {putImageToAdv} from "../../../lib/putImageToAdv";
import {rerender} from "../../../store/actionCreators/rerender";
import UiCloseIcon from "../../../components/UI/UiCloseIcon/UiCloseIcon";
import $api, {API_URL} from "../../../http/interceptors";

const AddOneImage = ({image, isNew, adData, setFormValid}) => {
	const images = useSelector(imagesSelector)
	const dispatch = useDispatch()

	const isImage = (image) => {
		if (image) {
			return {
				backgroundImage: `url("${API_URL}/${image}")`,
				backgroundSize: 'cover',
				backgroundColor: '#F0F0F0',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			}
		} else {
			return {
				backgroundImage: `url("../../../../img/plus.svg")`,
				backgroundColor: '#F0F0F0',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			}
		}
	}

	const handleImage = (event) => {
		const file = event.target.files[0]
		setFormValid(true)

		if (!isNew) {
			putImageToAdv(adData.id, file, dispatch, setAdvImages)
			dispatch(rerender())

			return
		}

		for (let i = 0; i < images.length; i++) {
			if (!images[i]) {
				images[i] = file
				break
			}
		}
		dispatch(rerender())
		dispatch(setAdvImages(images))
	}
	const deleteImage = async () => {
		const queryUrl = new URLSearchParams()
		queryUrl.set('file_url', `${image}`)
		const response = await $api.delete(`/ads/${adData.id}/image/?${queryUrl}`)
		const imagesUrls = response.data.images.map(el => (el.url))
		dispatch(setAdvImages(imagesUrls))
		dispatch(rerender())
	}

	return (
		<div className={style.imageItem}>
			<label htmlFor='uploadInput' className={style.labelInput} style={isImage(image)}/>
			<input id='uploadInput' type='file' className={style.input} onChange={e => handleImage(e)}/>
			<UiCloseIcon onClick={deleteImage}/>
		</div>
	);
};

export default AddOneImage;