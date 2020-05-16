import {Injectable} from '@angular/core';
import {DataModel} from './model/data.model';
import {Observable, Subject} from 'rxjs';
import {CountryData} from './model/country.model';
import {CountryDetailModel} from './model/country-detail.model';
import {DataStorageService} from './data-storage.service';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataModel: DataModel = null;
  private countryDetail: CountryDetailModel[] = null;
  dataModelChanged = new Subject<DataModel>();
  dateChanged = new Subject<string>();
  countriesChanged = new Subject<CountryData[]>();
  countryChanged = new Subject<CountryDetailModel[]>();


  setData(dataModel: DataModel) {
    this.dataModel = dataModel;
    this.dataModelChanged.next(dataModel);
    this.dateChanged.next(dataModel.Date);
    this.countriesChanged.next(dataModel.Countries);
    console.log('working');
  }
  setCountryData(data: CountryDetailModel[]) {
    this.countryDetail = data;
    this.countryChanged.next(this.countryDetail);
    console.log(this.countryDetail)
  }
  getCountryDetailData() {
    return this.countryDetail;
  }
  getCountryData(countrySlug: string): CountryData {
    let countryData: CountryData;
    countryData = this.dataModel.Countries
      .find(country => country.Slug === countrySlug);
    return countryData;
  }

}
