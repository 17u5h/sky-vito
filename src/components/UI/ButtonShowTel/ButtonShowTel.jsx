import React, {useState} from 'react';
import UiButton from "../UiButton/UiButton";

const ButtonShowTel = ({tel, isAuth}) => {
	const [visibleTel, setVisibleTel] = useState('8 XXX XXX XX XX')

	const showTel = (rawTel) => {
		if(!isAuth){
			setVisibleTel('Необходимо войти')
			return
		}
		const telArr = rawTel.split('')
		telArr.splice(-2, 0, ' ')
		telArr.splice(-5, 0, ' ')
		telArr.splice(-9, 0, ' ')
		telArr.splice(-13, 0, ' ')
		const prettyTel = telArr.join('')
		setVisibleTel(prettyTel)
	}

	return (
		<UiButton onClick={() => showTel(tel)}>
			<p>Показать телефон</p>
			<p>{visibleTel}</p>
		</UiButton>
	);
};

export default ButtonShowTel;