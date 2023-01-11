import React, {useState} from 'react';
import UiButton from "../../../components/UI/UiButton/UiButton";
import style from './style.module.css'
import UiModal from "../../../components/UI/UiModal/UiModal";
import {AnimatePresence, motion} from "framer-motion";
import {backdrop} from "../../../constants/animationModal";
import {Login} from "../../../components/LoginRegistration/Login";


const Header = ({isAuth}) => {
	const [showLoginForm, setShowLoginForm] = useState(false);

	const showLoginFormHandle = () => {
		setShowLoginForm((prevState) => !prevState);
	};

	return (
		<div>
			<div className={style.headerField}>
				<div>
					{isAuth ?
						<div className={style.buttonBlock}>
							<UiButton topButton={true}>Разместить объявление</UiButton>
							<UiButton topButton={true}>Личный кабинет</UiButton>
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
			</AnimatePresence>
		</div>
	);
};

export default Header;