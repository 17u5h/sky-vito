import React from 'react';
import style from './style.module.css'
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {ads} from "../../stubs/ads-stub";
import {feedbacks} from "../../stubs/feedbacks-stub";
import AdvImages from "./AdvImages/AdvImages";

const AdvDescription = ({isSeller}) => {
	// const { id } = useParams();
	//
	// const { data, isSuccess, isLoading, isError } = useFetchCoursePageQuery(id);

	const isAuth = true
	const sellerId = ads[0].id


	const countFeedbacks = feedbacks.length

	return (
		<div className={style.container}>
			<HeaderWithLogo isAuth={isAuth}/>
			<div className={style.block}>
				<AdvImages images={ads[0].images}/>
				<div className={style.description}>
					<h2 className={style.title}>{ads[0].title}</h2>
					<div className={style.infoBlock}>
						<p className={style.time}>{ads[0].time}</p>
						<p className={style.city}>{ads[0].city}</p>
						<div className={style.feedbacks}>{`количество отзывов: ${countFeedbacks}`}</div>
					</div>
					<div className={style.price}>{`${ads[0].price} ₽`}</div>
					{/*{isSeller ? <SellerInfo sellerId={sellerId}/> : <MyInfo/>}*/}
				</div>
			</div>
			<p className={style.subtitle}>Описание товара</p>
			<p className={style.productDescription}>{ads[0].description}</p>
		</div>
	);
};

export default AdvDescription;