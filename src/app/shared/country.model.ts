export class Country {

  constructor(
    public country: string,
    public countryCode: string,
    public slug: string,
    public newConfirmed: number,
    public totalConfirmed: number,
    public newDeaths: number,
    public totalDeaths: number,
    public newRecovered: number,
    public totalRecovered: number,
    public date: Date) {
  }

}
