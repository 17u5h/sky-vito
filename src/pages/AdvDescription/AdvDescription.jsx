import React, {useEffect, useState} from 'react';
import style from './style.module.css'
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {ads} from "../../stubs/ads-stub";
import {feedbacks} from "../../stubs/feedbacks-stub";
import AdvImages from "./AdvImages/AdvImages";
import SellerInfo from "./SellerInfo/SellerInfo";
import MyInfo from "./MyInfo/MyInfo";
import {seller} from "../../stubs/sellerInfo-stub";
import UiModal from "../../components/UI/UiModal/UiModal";
import {AnimatePresence, motion} from "framer-motion";
import {backdropReviews} from "../../constants/animationModal";
import Reviews from "../../modals/Reviews/Reviews";
import {useParams} from "react-router-dom";
import $api from "../../http/interceptors";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../store/selectors/authSelector";
import {rerender} from "../../store/actionCreators/rerender";
import {rerenderSelector} from "../../store/selectors/rerenderSelector";
import {setAdvImages} from "../../store/actionCreators/advImages";

const AdvDescription = ({isSeller}) => {
	const {id} = useParams();
	const dispatch = useDispatch()
	const [adData, setAdData] = useState({})
	const [images, setImages] = useState([])
	const [showReviews, setShowReviews] = useState(false)
	const isAuth = useSelector(authSelector)
	const rerender = useSelector(rerenderSelector)

	const createArrOfImagesUrls = (data) => {
		const ImageUrls = []
		data.images?.map(el => {
			ImageUrls.push(el.url)
		})
		return ImageUrls
	}

	const fetchAdData = async () => {
		const {data} = await $api.get(`ads/${id}`)
		setAdData(data)
		setImages(createArrOfImagesUrls(data))
		dispatch(setAdvImages(createArrOfImagesUrls(data)))
	}

	useEffect(() => {
		fetchAdData()
	}, [rerender])

	const sellerId = ads[0].id

	const showReviewsHandle = () => {
		setShowReviews((prevState) => !prevState)
	}

	const countFeedbacks = feedbacks.length

	return (
		<div className={style.container}>
			<HeaderWithLogo isAuth={isAuth}/>
			<div className={style.block}>
				<AdvImages images={images} adData={adData}/>
				<div className={style.description}>
					<h2 className={style.title}>{adData.title}</h2>
					<div className={style.infoBlock}>
						<p className={style.time}>{adData.created_on}</p>
						<p className={style.city}>{adData.city}</p>
						<div className={style.feedbacks} onClick={showReviewsHandle}>{`количество отзывов: ${countFeedbacks}`}</div>
					</div>
					<div className={style.price}>{`${adData.price} ₽`}</div>
					{isSeller ? <SellerInfo seller={seller}/> : <MyInfo adData={adData} images={images}/>}
				</div>
			</div>
			<p className={style.subtitle}>Описание товара</p>
			<p className={style.productDescription}>{adData.description}</p>
			<AnimatePresence>
				{showReviews && (
					<UiModal>
						<motion.div variants={backdropReviews} initial="hidden" animate="visible" exit="exit">
							<Reviews closeModal={showReviewsHandle}/>
						</motion.div>
					</UiModal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AdvDescription;