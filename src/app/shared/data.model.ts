import {Country} from './country.model';

export class DataModel {
  constructor(
    public global: {
      newConfirmed: number,
      totalConfirmed: number,
      newDeaths: number,
      totalDeaths: number,
      newRecovered: number,
      totalRecovered: number
    },
    public countries: Country[],
    public Date: string
  ) {
  }
}
