type Author = {
  id: string
  email: string
  companyId: string | null
  field: string
  values: any
}

export type AnalogModel = {
  id: string,
  originId: string,
  source: string,
  link: string,

  title: string,
  address: string,
  district: string,
  price: number,
  area: number,
  pricePerMeter: number,
  description: string,
  descriptionHtml: string,
  startDate: number,
  endDate: number | null,
  images: string[],
  screenshot: string | null,
  isNewItem: boolean,
  isActive: boolean,

  type: string,
  category: string,
  region: string,
  city: string | null,
  purposes: string[],
  history: string[],
  details: {
    authors: Author[]
    stead: {
      availability: boolean | null
      area: number | null
      ownership: 'own' | 'rent' | null
    }
    structureOfPremises: {
      warm: number | null
      cold: number | null
      officeOrTrade: number | null
    }
    areaDistribution: {
      basement: number | null
      groundFloor: number | null
      firstFloor: number | null
      secondFloorAndAbove: number | null
    }
    communications: {
      heating: 'central' | 'autonomous' | 'missing' | null
      sewerage: 'central' | 'autonomous' | 'missing' | null
      electricitySupply: boolean | null
      waterSupply: boolean | null
    }
    cadastralNumber: string[]
  }
}
