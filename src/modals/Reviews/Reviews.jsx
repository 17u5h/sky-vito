import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import UiCloseButton from "../../components/UI/UiCloseButton/UiCloseButton";
import UiButton from "../../components/UI/UiButton/UiButton";
import {reviews} from "../../stubs/reviews-stub";
import Review from "./Review/Review";


const Reviews = ({closeModal}) => {
	const [formValid, setFormValid] = useState(false)
	const [newReview, setNewReview] = useState('')

	useEffect(() => {
		newReview ? setFormValid(true) : setFormValid(false)
	}, [newReview])


	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<p className={style.title}>Отзывы о товаре</p>
				<UiCloseButton onClick={() => closeModal()}/>
			</div>
			<div className={style.container}>
				<div className={style.inputSection}>
					<p>Добавить отзыв</p>
					<textarea className={style.input} value={newReview} onChange={e => setNewReview(e.target.value)}/>
					<UiButton disabled = {!formValid}>Опубликовать</UiButton>
					<div className={style.reviewsSection}>
						{reviews.map(el => (<Review reviewData={el} />))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;