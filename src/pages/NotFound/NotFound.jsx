import React from 'react'
import style from './style.module.css'
import Logo from '../../components/Logo/Logo'

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <Logo />
      <div className={style.img} />
      <div className={style.text}>Страница не найдена. Вы попали в Мордор</div>
    </div>
  )
}

export default NotFound
