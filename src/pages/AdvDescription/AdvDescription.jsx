import React, {useState} from 'react';
import style from './style.module.css'
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {ads} from "../../stubs/ads-stub";
import {feedbacks} from "../../stubs/feedbacks-stub";
import AdvImages from "./AdvImages/AdvImages";
import SellerInfo from "./SellerInfo/SellerInfo";
import MyInfo from "./MyInfo/MyInfo";
import {seller} from "../../stubs/sellerInfo-stub";
import {user} from "../../stubs/userData-stub";
import UiModal from "../../components/UI/UiModal/UiModal";
import {AnimatePresence, motion} from "framer-motion";
import {backdropReviews} from "../../constants/animationModal";
import Reviews from "../../modals/Reviews/Reviews";

const AdvDescription = ({isSeller}) => {
	// const { id } = useParams();
	//
	// const { data, isSuccess, isLoading, isError } = useFetchCoursePageQuery(id);

	const [showReviews, setShowReviews] = useState(false)
	const isAuth = true
	const sellerId = ads[0].id

	const showReviewsHandle = () => {
		setShowReviews((prevState) => !prevState)
	}

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
						<div className={style.feedbacks} onClick={showReviewsHandle}>{`количество отзывов: ${countFeedbacks}`}</div>
					</div>
					<div className={style.price}>{`${ads[0].price} ₽`}</div>
					{isSeller ? <SellerInfo seller={seller}/> : <MyInfo user={user}/>}
				</div>
			</div>
			<p className={style.subtitle}>Описание товара</p>
			<p className={style.productDescription}>{ads[0].description}</p>
			<AnimatePresence>
				{showReviews && (
					<UiModal>
						<motion.div variants={backdropReviews} initial="hidden" animate="visible" exit="exit">
							<Reviews closeModal={showReviewsHandle} />
						</motion.div>
					</UiModal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AdvDescription;