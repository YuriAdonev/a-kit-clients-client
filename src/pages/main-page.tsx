import { FC } from 'react'
import {useSelector} from 'react-redux'
import {getCompilationsCurrent} from '../features/compilations/compilations.selectors'
import {getUser} from '../features/user/user.actions'
import {getUserCurrent} from '../features/user/user.selectors'
import {Link} from 'react-router-dom'

export const MainPage: FC = () => {
  const currentCompilation = useSelector(getCompilationsCurrent)
  const user = useSelector(getUserCurrent)

  return (
    <div className="page">
      <div className="main-page">
        <div className="main-page-head">
          <h2>Добрый день, {user?.firstName}</h2>
          <p>Осталось 25 дней подписки</p>
          <p>Вы можете продлить подписку в <Link to="/profile">профиле</Link></p>
        </div>
        <div className="main-page-compilation">
          <h2>Подборки</h2>
          {currentCompilation
            ? (
              <>
                <p>Продолжить работу в подборке <Link to={`/compilation/${currentCompilation.id}`}>{currentCompilation.title}</Link></p>
                <p>Или выберите <Link to="/compilations">подборку</Link> для работы</p>
              </>
            )
            : (
              <p>Выберите <Link to="/compilations">подборку</Link> для работы</p>
            )
          }
        </div>
        <div className="main-page-news">
          <h2>Новости</h2>
          <div className="main-page-news__list">
            <div className="main-page-news-item">
              <p className="main-page-news-item__title">Запущено приложение</p>
              <p className="main-page-news-item__text">1 сентября 2022 запустили приложение в тестовом режиме</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
