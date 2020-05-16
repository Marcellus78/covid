export class CountryDetailModel {

  constructor(
    public Country: string,
    public CountryCode: string,
    public Province: string,
    public City: string,
    public CityCode: string,
    public Lat: number,
    public Lon: number,
    public Confirmed: number,
    public Deaths: number,
    public Recovered: number,
    public Active: number,
    public Date: string) {}

}
