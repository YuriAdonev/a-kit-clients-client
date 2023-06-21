import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {IconCompilation} from "../icons/icon-compilation";
import {IconSearch} from "../icons/icon-search";
import {IconBag} from "../icons/icon-bag";
import {IconLogout} from '../icons/icon-logout'
import {useDispatch, useSelector} from 'react-redux'
import {authLogout} from '../../features/auth/auth.actions'
import {getUserCurrent} from '../../features/user/user.selectors'
import {getCompilationsCurrent} from '../../features/compilations/compilations.selectors'
import {IoDocumentTextOutline} from 'react-icons/io5'

export const MainNav: FC = () => {
  const user = useSelector(getUserCurrent)
  const currentCompilation = useSelector(getCompilationsCurrent)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authLogout())
  }

  return (
    <div className="main-nav">
      <div className="main-nav__menu">
        <NavLink
          className={({ isActive }) => `main-nav-item${ isActive ? ' active' : '' }`}
          to="/compilations"
        >
          <IconCompilation />
          <span>Подборки</span>
        </NavLink>
        {currentCompilation
          ? (
            <NavLink
              className={({ isActive }) => `main-nav-item main-nav-item--inner${ isActive ? ' active' : '' }`}
              to={`/compilation/${currentCompilation.id}`}
            >
              <IoDocumentTextOutline />
              <span>{currentCompilation.title}</span>
            </NavLink>
          )
          : null
        }
        {/*{currentCompilation*/}
        {/*  ? (*/}
        {/*    <NavLink*/}
        {/*      className={({ isActive }) => `main-nav-item${ isActive ? ' active' : '' }`}*/}
        {/*      to="/analogs"*/}
        {/*    >*/}
        {/*      <IconSearch />*/}
        {/*      <span>Аналоги</span>*/}
        {/*    </NavLink>*/}
        {/*  )*/}
        {/*  : null*/}
        {/*}*/}
        {user?.subscriptions.valuations
          ? <NavLink
              className={({ isActive }) => `main-nav-item${ isActive ? ' active' : '' }`}
              to="/reports"
            >
              <IconBag />
              <span>Отчеты</span>
            </NavLink>
          : null
        }
      </div>
      <div className="main-nav__footer">
        <div
          className="main-nav-item main-nav__logout"
          onClick={logoutHandler}
        >
          <IconLogout />
          <span>Выход</span>
        </div>
      </div>
    </div>
  )
}
