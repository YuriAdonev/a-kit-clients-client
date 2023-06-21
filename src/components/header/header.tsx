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

export const Header: FC = () => {
  const user = useSelector(getUserCurrent)

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">A-KIT</Link>
      </div>
      <div className="header-user">
        <NavLink
          className={({ isActive }) => `header-user__avatar${ isActive ? ' active' : '' }`}
          to="/profile"
        >
          <div>{user?.lastName?.slice(0, 1)}{user?.firstName?.slice(0, 1)}</div>
        </NavLink>
      </div>
    </div>
  )
}
