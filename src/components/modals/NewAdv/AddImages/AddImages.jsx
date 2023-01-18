import React, {useState} from 'react';
import style from './style.module.css'
import ReactImageUploading from "react-images-uploading";
import UiCloseButton from "../../../UI/UiCloseButton/UiCloseButton";
import {BASE_URL} from "../../../../constants/BASE_URL";

const AddImages = () => {

	const [images, setImages] = useState(['','','','',''])
	const maxNumber = 5

	const onChange = (imageList) => {
		setImages(imageList)
	}
	const id = 23

	return (
		<ReactImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey=''>
			{({imageList, onImageUpload, onImageRemove}) => (
				<div className={style.container}>
					{imageList.map((image, index) => (
						<div key={index} className={style.imageItem} onClick={onImageUpload} style={{background: `#f0f0f0 url("${BASE_URL}/${id}/image")`}}>
							<UiCloseButton onClick={onImageRemove}/>
						</div>


					))}
				</div>
			)
			}
		</ReactImageUploading>
	);
};

export default AddImages;