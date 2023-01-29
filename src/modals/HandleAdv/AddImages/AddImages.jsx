import React, {useState} from 'react';
import style from './style.module.css'

import AddOneImage from "./AddOneImage";
import {useSelector} from "react-redux";
import {imagesSelector} from "../../../store/selectors/imagesSelector";

const AddImages = ({isNew}) => {
	const images = useSelector(imagesSelector)

	const [rerender, setRerender] = useState(1)

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
								<AddOneImage key={Math.random() * 10000} background={background(el)} isNew={isNew} setRerender={setRerender}/>
			))}
		</div>
	);
};

export default AddImages;