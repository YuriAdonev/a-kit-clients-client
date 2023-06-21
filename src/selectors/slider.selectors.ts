import { IState } from '../reducers'

export const getSliderIsActive = ({ slider }: IState): boolean => slider.isActive
export const getSliderImageList = ({ slider }: IState): string[] => slider.imageList
export const getSliderCurrentIndex = ({ slider }: IState): number => slider.currentIndex
