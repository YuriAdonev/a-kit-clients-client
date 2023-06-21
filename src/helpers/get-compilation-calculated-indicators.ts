import BigNumber from "bignumber.js";
import {AnalogModel} from "../models/analog-model";

type ValueWithAddressTypes = {
  value: number
  address: string
}

export type CompilationCalculatedIndicatorsTypes = {
  announcementsCount: number
  totalArea: number
  totalPrice: number
  weightedAveragePrice: number
  averagePrice: number
  averageArea: number

  largestArea: ValueWithAddressTypes
  highestPrice: ValueWithAddressTypes
  smallestArea: ValueWithAddressTypes
  lowestPrice: ValueWithAddressTypes
}

const emptyIndicators = {
  announcementsCount: 0,
  totalArea: 0,
  totalPrice: 0,
  weightedAveragePrice: 0,
  averagePrice: 0,
  averageArea: 0,
  largestArea: {
    value: 0,
    address: ''
  },
  highestPrice: {
    value: 0,
    address: ''
  },
  smallestArea: {
    value: 0,
    address: ''
  },
  lowestPrice: {
    value: 0,
    address: ''
  }
}

export const getCompilationCalculatedIndicators = (list: AnalogModel[]): CompilationCalculatedIndicatorsTypes => {
  if (list.length < 1) {
    return emptyIndicators
  }

  console.log('list', list)

  const getTotalArea = (): number => {
    const areas = list.map(item => item.area)
    return BigNumber.sum.apply(null, areas).toNumber()
  }
  const getTotalPrice = (): number => {
    const prices = list.map(item => item.price)
    return BigNumber.sum.apply(null, prices).toNumber()
  }
  const getWeightedAveragePrice = (): number => {
    const price = new BigNumber(getTotalPrice())
    const area = new BigNumber(getTotalArea())
    return price.div(area).toNumber()
  }
  const getAveragePrice = (): number => {
    let pricesPerSquare = list.map(item => {
      const price = new BigNumber(item.price)
      const area = new BigNumber(item.area)
      return price.div(area).toNumber()
    })
    const prices = BigNumber.sum.apply(null, pricesPerSquare)
    const count = new BigNumber(list.length)
    return prices.div(count).toNumber()
  }
  const getAverageArea = (): number => {
    const area = new BigNumber(getTotalArea())
    const count = new BigNumber(list.length)
    return area.div(count).toNumber()
  }
  const getLargestAndSmallestArea = (): { largest: ValueWithAddressTypes, smallest: ValueWithAddressTypes } => {
    const areas = list.map(item => item.area)
    const largestValue = BigNumber.max.apply(null, areas).toNumber()
    const smallestValue = BigNumber.min.apply(null, areas).toNumber()
    const largestIdx = areas.findIndex(it => it === largestValue)
    const smallestIdx = areas.findIndex(it => it === smallestValue)
    console.log('largestIdx', largestIdx)
    console.log('smallestIdx', smallestIdx)
    return {
      largest: {
        value: largestValue,
        address: list[largestIdx].address
      },
      smallest: {
        value: smallestValue,
        address: list[smallestIdx].address
      }
    }
  }
  const getHighestAndLowestPrice = (): { highest: ValueWithAddressTypes, lowest: ValueWithAddressTypes } => {
    let pricesPerSquare = list.map(item => {
      const price = new BigNumber(item.price)
      const area = new BigNumber(item.area)
      return price.div(area).toNumber()
    })
    const highestValue = BigNumber.max.apply(null, pricesPerSquare).toNumber()
    const lowestValue = BigNumber.min.apply(null, pricesPerSquare).toNumber()
    const highestIdx = pricesPerSquare.findIndex(it => it === highestValue)
    const lowestIdx = pricesPerSquare.findIndex(it => it === lowestValue)
    return {
      highest: {
        value: highestValue,
        address: list[highestIdx].address
      },
      lowest: {
        value: lowestValue,
        address: list[lowestIdx].address
      }
    }
  }
  const largestAndSmallestArea = getLargestAndSmallestArea()
  const highestAndLowestPrice = getHighestAndLowestPrice()
  return {
    announcementsCount: list.length,
    totalArea: getTotalArea(),
    totalPrice: getTotalPrice(),
    weightedAveragePrice: getWeightedAveragePrice(),
    averagePrice: getAveragePrice(),
    averageArea: getAverageArea(),

    largestArea: largestAndSmallestArea.largest,
    highestPrice: highestAndLowestPrice.highest,
    smallestArea: largestAndSmallestArea.smallest,
    lowestPrice: highestAndLowestPrice.lowest
  }
}
