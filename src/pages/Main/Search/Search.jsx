import React from 'react';
import style from "./style.module.css";
import LogoPic from "../../../components/Logo/LogoPic";
import UiButton from "../../../components/UI/UiButton/UiButton";

const Search = () => {


	return (
		<div className={style.searchContainer}>
			<LogoPic/>
			<input className={style.searchField} placeholder='Поиск по объявлениям'/>
			<UiButton topButton={true}>Найти</UiButton>
		</div>
	);
};

export default Search;