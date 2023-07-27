import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/main-page'
import { NotFoundPage } from '../pages/not-found-page'
import { MainNav } from '../components/main-nav/main-nav'
import { AnalogsPage } from '../pages/analogs-page'
import { ProfilePage } from '../pages/profile-page'
import { ReportsPage } from "../pages/reports-page";
import { ReportPage } from '../pages/report-page'
import { CompilationPage } from "../pages/compilation-page";
import { CompilationsPage } from "../pages/compilations-page";

import {useSelector} from "react-redux";
import {getSliderIsActive} from "../selectors/slider.selectors";
import {Modals} from "./modals";
import {getUserCurrent} from '../features/user/user.selectors'
import {Header} from '../components/header/header'

export const Router: FC = () => {
  const user = useSelector(getUserCurrent)
  const sliderIsActive = useSelector(getSliderIsActive)

  return (
    <div className={`app${sliderIsActive ? ' disable-scroll' : ''}`}>
      <MainNav />
      <Header />
      <Modals />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/analogs" element={<AnalogsPage />} />
          <Route path="/compilations" element={<CompilationsPage />} />
          <Route path="/compilation/:compilationId" element={<CompilationPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/report/:id" element={<ReportPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}
