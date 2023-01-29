import React, {useState} from 'react';
import style from "./style.module.css";
import {$fileUpload} from "../../../http/interceptors";
import {useDispatch, useSelector} from "react-redux";
import {imagesSelector} from "../../../store/selectors/imagesSelector";
import {setAdvImages} from "../../../store/actionCreators/advImages";

const AddOneImage = ({background, setRerender}) => {
	const images = useSelector(imagesSelector)
	const dispatch = useDispatch()



	const handleImage = (event) => {
		const file = event.target.files[0]

		for (let i = 0; i < images.length; i++) {
			if (!images[i]) {
				images[i] = file
				break
			}
		}
		setRerender(count => count + 1)
		dispatch(setAdvImages(images))
	}

	return (
		<div className={style.imageItem}>
			{background === 'not uploaded' ?
				<label htmlFor='uploadInput' className={style.imageNotUploaded}/>
				:
				<label htmlFor='uploadInput' className={style.imageUploaded}/>
			}
			<input id='uploadInput' type='file' className={style.input} onChange={e => handleImage(e)}/>
		</div>
	);
};

export default AddOneImage;