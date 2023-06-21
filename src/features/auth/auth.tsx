import React, {FC, FocusEvent, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {authLogin, authRegister} from './auth.actions'

export const Login: FC = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (isLogin) {
      dispatch(authLogin({ email, password }))
    } else {
      dispatch(authRegister({ email, password }))
    }
  }

  return (
    <div className="login">
      <div className="login__header">
        <p>{ isLogin ? 'Вход в приложение' : 'Регистрация пользователя' }</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="login__input">
          <span>Email</span>
          <input
            type="text"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            // disabled={true}
          />
        </div>
        <div className="login__input">
          <span>Пароль</span>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            // disabled={true}
          />
        </div>
        {!isLogin
          ? (
            <div className="login__input">
              <span>Повторите пароль</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(evt) => setConfirmPassword(evt.target.value)}
                // disabled={true}
              />
            </div>
          )
          : null
        }
        <div className="login__footer">
          <button className="login__btn">{isLogin ? 'Войти' : 'Регистрация'}</button>
          {isLogin
            ? <p>Еще нет аккаунта? <span onClick={() => setIsLogin(false)}>Пройдите регистрацию.</span></p>
            : <p>Уже есть аккаунт? <span onClick={() => setIsLogin(true)}>Авторизуйтесь.</span></p>
          }
        </div>
        {/*{ errors.length > 0 && errors.map((errorItem, idx) => <p key={idx}>{errorItem.message}</p>) }*/}
      </form>
    </div>
  )
}
