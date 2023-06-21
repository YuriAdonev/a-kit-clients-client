import React, {FC, useState} from "react";
import { useDispatch } from "react-redux";
import {addUserInfo} from './user.actions'

export const User: FC = () => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [middleName, setMiddleName] = useState('')

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (firstName && lastName) {
      dispatch(addUserInfo({ firstName, lastName, middleName }))
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__deco">APPRAISER-KIT</div>
      <div className="login-page__content">
        <div className="login">
          <div className="login__header">
            <p>Завершение регистрации</p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="login__input">
              <span>Фамилия</span>
              <input
                type="text"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}
              />
            </div>
            <div className="login__input">
              <span>Имя</span>
              <input
                type="text"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}
              />
            </div>
            <div className="login__input">
              <span>Отчество</span>
              <input
                type="text"
                value={middleName}
                onChange={(evt) => setMiddleName(evt.target.value)}
              />
            </div>
            <div className="login__footer">
              <button className="login__btn">Завершить</button>
            </div>
            {/*{ errors.length > 0 && errors.map((errorItem, idx) => <p key={idx}>{errorItem.message}</p>) }*/}
          </form>
        </div>
      </div>
    </div>
  )
}
