import React from 'react';
import style from './style.module.css'

const AdvImages = ({images}) => {

	const bigImg = images[0] || ''
	while(images.length < 6){
		images.push('')
	}
	const smallImages = images.slice(1, 6)

	const bigImgBackground = {background: `#F0F0F0 url("${bigImg}") no-repeat center`}

	return (
		<div className={style.container}>
			<div className={style.bigImg} style={bigImgBackground}/>
			<div className={style.smallImagesContainer}>
				{smallImages.map(el => (<div key={Math.random()*1000} className={style.smallImg}
																		 style={{background: `#F0F0F0 url("${el}") no-repeat center`}}/>))}
			</div>
		</div>
	);
};

export default AdvImages;