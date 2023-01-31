import React from 'react';
import style from './style.module.css'
import AddOneImage from "./AddOneImage";
import {useSelector} from "react-redux";
import {imagesSelector} from "../../../store/selectors/imagesSelector";
import {rerenderSelector} from "../../../store/selectors/rerenderSelector";

const AddImages = ({isNew, adData, setFormValid}) => {
	const images = useSelector(imagesSelector)
	const rerender = useSelector(rerenderSelector)

	while (images.length > 5) images.pop()

	return (
		<div className={style.images}>
			{rerender && images.map((el) => (
				<AddOneImage key={Math.random() * 10000} image={el} isNew={isNew} adData={adData}
										 setFormValid={setFormValid}/>
			))}
		</div>
	);
};

export default AddImages;