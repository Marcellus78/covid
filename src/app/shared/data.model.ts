import {CountryData} from './country.model';

export class DataModel {
  constructor(
    public Global: {
      NewConfirmed: number,
      TotalConfirmed: number,
      NewDeaths: number,
      TotalDeaths: number,
      NewRecovered: number,
      TotalRecovered: number
    },
    public Countries: CountryData[],
    public Date: string
  ) {
  }
}
