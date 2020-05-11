import {Injectable} from '@angular/core';
import {DataModel} from './data.model';
import {Observable, Subject} from 'rxjs';
import {CountryData} from './country.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataModel: DataModel = null;
  dataModelChanged = new Subject<DataModel>();
  dateChanged = new Subject<string>();
  countriesChanged = new Subject<CountryData[]>()

  setData(dataModel: DataModel) {
    this.dataModel = dataModel;
    this.dataModelChanged.next(dataModel);
    this.dateChanged.next(dataModel.Date);
    this.countriesChanged.next(dataModel.Countries);
    console.log('working');
  }

}
