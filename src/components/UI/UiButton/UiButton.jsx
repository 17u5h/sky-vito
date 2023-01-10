import React from 'react'
import style from './style.module.css'

const UiButton = ({ children, ...props }) => {
  return (
    <button className={props.topButton ? style.topButton : style.button} {...props}>
      {props.loading ? <div className={style.loadingSpinner} /> : children}
    </button>
  )
}

export default UiButton
