import React from 'react';
import style from './style.module.css'

const Review = ({reviewData}) => {
	return (
		<div className={style.wrapper}>
			<div className={style.icon} style={{background: `#f0f0f0 url("${reviewData.author.avatar}") no-repeat center`}}/>
			<div className={style.container}>
				<div className={style.about}>
					<p className={style.author}>{reviewData.author.name}</p>
					<p className={style.date}>{reviewData.created_on}</p>
				</div>
				<div className={style.reviewBlock}>
					<p className={style.reviewTitle}>Комментарий</p>
					<p className={style.reviewText}>{reviewData.text}</p>
				</div>
			</div>
		</div>
	);
};

export default Review;