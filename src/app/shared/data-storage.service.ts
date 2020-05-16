import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {DataModel} from './model/data.model';
import {map, tap} from 'rxjs/operators';
import {Observable, Subject, Subscription} from 'rxjs';
import {CountryData} from './model/country.model';
import {CountryDetailModel} from './model/country-detail.model';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  private dataModel: DataModel = null;
  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  fetchData() {
    // return this.http.get<DataModel>('https://api.covid19api.com/summary')
    //   .pipe(map(response => {
    //     return response;
    //   }), tap( response => {
    //     this.dataService.setData(response);
    //   }));
    // return this.http.get('https://api.covid19api.com/summary').subscribe( res => console.log(res));
    return this.http.get<DataModel>('https://api.covid19api.com/summary')
      .subscribe(res =>{
        console.log(res.Date);
        this.dataService.setData(res);
      });
  }
  fetchCountry() {
    return this.http.get<CountryDetailModel>('https://api.covid19api.com/dayone/country/poland')
      .subscribe( res => {
        console.log(res);
        this.dataService.setCountryData(res);
      });
  }
  fetchModel(){
    return this.http.get<DataModel>('https://api.covid19api.com/summary')
      .pipe(map(response => {return response}), tap( response => {
        this.dataService.setData(response);
      }));
  }

  fetchTest() {
    const countries: CountryData[] = [{
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Slug: 'afghanistan',
      NewConfirmed: 255,
      TotalConfirmed: 4033,
      NewDeaths: 6,
      TotalDeaths: 115,
      NewRecovered: 30,
      TotalRecovered: 502,
      Date: "2020-05-10T11:28:19Z"
    },{
      Country: 'Afghanistan2',
      CountryCode: 'AF2',
      Slug: 'afghanistan2',
      NewConfirmed: 255,
      TotalConfirmed: 4033,
      NewDeaths: 6,
      TotalDeaths: 115,
      NewRecovered: 30,
      TotalRecovered: 502,
      Date: "2020-05-10T11:28:19Z"
    }]
    const dataModel: DataModel = new DataModel({
      NewConfirmed: 10,
      TotalConfirmed: 10,
      NewDeaths: 10,
      TotalDeaths: 10,
      NewRecovered: 10,
      TotalRecovered: 10
    },countries, '2020-05-10')
    this.dataService.setData(dataModel)

  }
}
