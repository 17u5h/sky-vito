import React, {useEffect, useState} from 'react';
import style from './style.module.css'

import AddOneImage from "./AddOneImage";
import {useDispatch, useSelector} from "react-redux";
import {imagesSelector} from "../../../store/selectors/imagesSelector";
import {rerenderSelector} from "../../../store/selectors/rerenderSelector";
import {setAdvImages} from "../../../store/actionCreators/advImages";

const AddImages = ({isNew, adData}) => {
	const dispatch = useDispatch()
	const images = useSelector(imagesSelector)
	const rerender = useSelector(rerenderSelector)

	const background = (el) => {
		if (el) {
			return 'uploaded'
		} else {
			return 'not uploaded'
		}
	}

	return (
		<div className={style.images}>
			{rerender && images.map((el) => (
				<AddOneImage key={Math.random() * 10000} background={background(el)} isNew={isNew} adData={adData}/>
			))}
		</div>
	);
};

export default AddImages;