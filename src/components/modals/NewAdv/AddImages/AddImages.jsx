import React, {useState} from 'react';
import style from './style.module.css'
import ReactImageUploading from "react-images-uploading";
import {BASE_URL} from "../../../../constants/BASE_URL";
import UiCloseIcon from "../../../UI/UiCloseIcon/UiCloseIcon";

const AddImages = () => {

	const [images, setImages] = useState(['','','','',''])
	const maxNumber = 5

	const onChange = (imageList) => {
		setImages(imageList)
	}
	const id = 23

	const backgroundImage = (url) => {
		if(url){
			return {background: `#f0f0f0 url("${BASE_URL}/${id}/image") no-repeat center`}
		}
	}

	return (
		<ReactImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey=''>
			{({imageList, onImageUpload, onImageRemove}) => (
				<div className={style.container}>
					{imageList.map((image, index) => (
						<div key={index} className={style.imageItem} onClick={onImageUpload} style={backgroundImage(image)}>
							{image && <UiCloseIcon onClick={onImageRemove}/>}
						</div>
					))}
				</div>
			)
			}
		</ReactImageUploading>
	);
};

export default AddImages;