export interface Country {
  cases: {
    active: number
    critical: number
    new: string
    recovered: string
  }
  continent: string
  country: string
  deaths: {
    oneMillionPop: string
    new: number
    total: number
  }
  population: number
  time: string
}
