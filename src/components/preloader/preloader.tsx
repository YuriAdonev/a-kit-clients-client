import { FC } from 'react'
import { Spinner } from '../spinner'

export const Preloader: FC = () => {
  return (
    <div className="preloader">
      <Spinner />
    </div>
  )
}
