import React, {useState} from 'react';
import UiButton from "../../../components/UI/UiButton/UiButton";
import style from './style.module.css'
import UiModal from "../../../components/UI/UiModal/UiModal";
import {AnimatePresence, motion} from "framer-motion";
import {backdrop, backdropNewADV} from "../../../constants/animationModal";
import {Login} from "../../../components/modals/LoginRegistration/Login";
import {useNavigate} from "react-router-dom";
import NewAdv from "../../../components/modals/NewAdv/NewAdv";


const Header = ({isAuth}) => {
	const [showLoginForm, setShowLoginForm] = useState(false)
	const [showNewAdvForm, setShowNewAdvForm] = useState(false)
	const navigate = useNavigate()

	const showLoginFormHandle = () => {
		setShowLoginForm((prevState) => !prevState)
	};
	const showNewAdvFormHandle = () => {
		setShowNewAdvForm((prevState) => !prevState)
	}

	return (
		<div>
			<div className={style.headerField}>
				<div>
					{isAuth ?
						<div className={style.buttonBlock}>
							<UiButton topButton={true} onClick={showNewAdvFormHandle}>Разместить объявление</UiButton>
							<UiButton topButton={true} onClick={() => navigate('profile')}>Личный кабинет</UiButton>
						</div>
						:
						<UiButton topButton={true} onClick={showLoginFormHandle}>Вход в личный кабинет</UiButton>
					}
				</div>
			</div>
			<AnimatePresence>
				{showLoginForm && (
					<UiModal>
						<motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit">
							<Login closeModal={showLoginFormHandle}/>
						</motion.div>
					</UiModal>
				)}
				{showNewAdvForm && (
					<UiModal>
						<motion.div variants={backdropNewADV} initial="hidden" animate="visible" exit="exit">
							<NewAdv closeModal={showNewAdvFormHandle}/>
						</motion.div>
					</UiModal>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Header;