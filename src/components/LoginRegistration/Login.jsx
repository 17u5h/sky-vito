import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import UiButton from '../UI/UiButton/UiButton'
import Logo from '../Logo/Logo'
import UiModal from '../UI/UiModal/UiModal'
import { Registration } from './Registration'
import {useNavigate} from "react-router-dom";

export function Login({ closeModal }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('Логин не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [emailVisited, setEmailVisited] = useState(false)
  const [passwordVisited, setPasswordVisited] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [enterError, setEnterError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const navigate = useNavigate()

  const loginError = false

  const loginHandler = (event) => {
    const email = event.target.value
    setEmail(email)
    setEmailError(email ? '' : 'email не может быть пустым')
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
    event.target.value ? setPasswordError('') : setPasswordError('Пароль не может быть пустым')
  }

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailVisited(true)
        break
      case 'password':
        setPasswordVisited(true)
        break
    }
  }
  useEffect(() => {
    setFormValid(!(emailError || passwordError))
  }, [emailError, passwordError])

  async function enterHandler(event) {
    event.preventDefault()

    setLoginLoading(true)

    try {
      // const response = await signInWithEmailAndPassword(email, password)

      navigate('profile')
      closeModal()

      setPasswordError('')
    } catch (error) {
      setEnterError(error.message)
    } finally {
      setLoginLoading(false)
    }
  }

  const registrationHandler = (event) => {
    event.preventDefault()

    setShowRegistrationForm(true)
  }

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false)
  }

  if (loginError) return <p>{loginError.message}</p>

  return (
    <div className={style.container}>
      <div className={style.loginModalBlock}>
        <div className={style.inputBlock}>
          <Logo />
          <div className={style.closeButton} onClick={closeModal}/>

          {emailVisited && emailError && <div className={style.loginError}>{emailError}</div>}
          <input
            className={style.input}
            onChange={loginHandler}
            onBlur={blurHandler}
            name="email"
            placeholder="email"
          />
          {passwordVisited && passwordError && (
            <div className={style.passwordError}>{passwordError}</div>
          )}
          <input
            className={style.input}
            onChange={passwordHandler}
            onBlur={blurHandler}
            onKeyDown={(event) => {
              if (event.key === 'Enter') enterHandler(event)
            }}
            type="password"
            name="password"
            placeholder="Пароль"
          />
        </div>
        {enterError && <div className={style.passwordError}>{enterError}</div>}
        <div className={style.buttonBlock}>
          <UiButton disabled={!formValid} onClick={enterHandler}>
            Войти
          </UiButton>
          <UiButton onClick={registrationHandler}>Зарегистрироваться</UiButton>
        </div>
        {loginLoading && <div className={style.loadingSpinner}></div>}
      </div>
      {showRegistrationForm && (
        <UiModal showRegistrationForm={showRegistrationForm}>
          <Registration closeModal={closeRegistrationForm} />
        </UiModal>
      )}
    </div>
  )
}
