import { FC } from 'react'
import { Login } from '../features/auth/auth'

export const AuthPage: FC = () => {
  return (
    <div className="login-page">
      <div className="login-page__deco">APPRAISER-KIT</div>
      <div className="login-page__content">
        <Login />
      </div>
    </div>
  )
}
