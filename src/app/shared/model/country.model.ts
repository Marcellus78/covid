export class CountryData {

  constructor(
    public Country: string,
    public CountryCode: string,
    public Slug: string,
    public NewConfirmed: number,
    public TotalConfirmed: number,
    public NewDeaths: number,
    public TotalDeaths: number,
    public NewRecovered: number,
    public TotalRecovered: number,
    public Date: string) {
  }

}
