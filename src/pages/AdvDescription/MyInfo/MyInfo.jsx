import React, {useState} from 'react';
import style from './style.module.css'
import UiButton from "../../../components/UI/UiButton/UiButton";
import {AnimatePresence, motion} from "framer-motion";
import {backdropNewADV} from "../../../constants/animationModal";
import HandleAdv from "../../../modals/HandleAdv/HandleAdv";
import UiModal from "../../../components/UI/UiModal/UiModal";

const MyInfo = ({user}) => {
	const [showEditAdv, setShowEditAdv] = useState(false)

	const editData = {
		title: 'Название товара',
		description: 'трали вали, хер в сандали',
		images: ['','','',''],
		price: 2200
	}

	const showEditAdvHandle = () => {
		setShowEditAdv((prevState) => !prevState)
	}

	const {firstName, date, img} = user

	const backgroundIcon = {background: `#F0F0F0 url("${img}") no-repeat center`}

	return (
		<div className={style.container}>
			<div className={style.buttonBlock}>
				<UiButton onClick={showEditAdvHandle}>Редактировать</UiButton>
				<UiButton>Снять с публикации</UiButton>
			</div>
			<div className={style.myInfo}>
				<div className={style.myIcon} style={backgroundIcon}/>
				<div className={style.about}>
					<p className={style.name}>{firstName}</p>
					<p className={style.since}>Продает товары с {date}</p>
				</div>
			</div>
			<AnimatePresence>
				{showEditAdv && (
					<UiModal>
						<motion.div variants={backdropNewADV} initial="hidden" animate="visible" exit="exit">
							<HandleAdv closeModal={showEditAdvHandle} title='Редактировать объявление' isNew={false} editData={editData}/>
						</motion.div>
					</UiModal>

				)}
			</AnimatePresence>
		</div>
	);
};

export default MyInfo;