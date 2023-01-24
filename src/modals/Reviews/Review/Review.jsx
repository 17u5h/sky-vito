import React from 'react';
import style from './style.module.css'

const Review = ({reviewData}) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon} style={{background: `#f0f0f0 url("${reviewData.image}") no-repeat center`}}/>
			<div className={style.container}>
				<div className={style.about}>
					<p className={style.author}>{reviewData.name}</p>
					<p className={style.date}>{reviewData.date}</p>
				</div>
				<div className={style.reviewBlock}>
					<p className={style.reviewTitle}>Комментарий</p>
					<p className={style.reviewText}>{reviewData.review}</p>
				</div>
			</div>
		</div>
	);
};

export default Review;