import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Router } from '../../routes/router'
import { AuthPage } from '../../pages/auth-page'
import { Preloader } from '../../components/preloader'
import { getAuthIsLoggedIn } from '../auth/auth.selectors'
import { getIsAppLoading} from './app.selectors'
import { appInitialize } from './app.actions'
import { User } from '../user/user'
import { getUserCurrent } from '../user/user.selectors'

export const App: FC = () => {
  const isLoggedIn = useSelector(getAuthIsLoggedIn)
  const isAppLoading = useSelector(getIsAppLoading)
  const user = useSelector(getUserCurrent)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(appInitialize())
  }, [])

  if (isAppLoading) {
    return <Preloader />
  }

  if (!isLoggedIn) {
    return <AuthPage />
  }

  if (!user?.firstName || !user?.lastName) {
    return <User />
  }

  return <Router />
}
