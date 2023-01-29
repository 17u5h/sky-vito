import React from 'react';
import style from './style.module.css'
import {API_URL} from "../../../http/interceptors";

const AdvImages = ({images}) => {

	while (images.length < 6) {
		images.push('')
	}
	const smallImages = images.slice(1, 6)

	const bigImg = images[0]
	const bigImgBackground = {
		backgroundImage: `url("${API_URL}/${bigImg}")`,
		backgroundSize: 'cover',
		backgroundColor: '#F0F0F0',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	}

	return (
		<div className={style.container}>
			<div className={style.bigImg} style={bigImgBackground}/>
			<div className={style.smallImagesContainer}>
				{smallImages.map(el => (<div key={Math.random() * 1000} className={style.smallImg}
																		 style={{
																			 background: `#F0F0F0 url("${API_URL}/${el}") no-repeat center`,
																			 backgroundSize: 'cover'
																		 }}/>))}
			</div>
		</div>
	);
};

export default AdvImages;