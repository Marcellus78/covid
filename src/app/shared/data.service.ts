import {Injectable} from '@angular/core';
import {DataModel} from './data.model';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataModel: DataModel = null;
  dataModelChanged = new Subject<DataModel>();

  setData(dataModel: DataModel) {
    this.dataModel = dataModel;
    this.dataModelChanged.next(dataModel);
    console.log('working');
  }

  getGlobal() {

  }
  getCountries() {

  }
  getCountry() {

  }

  getDate(): string {
    const date = this.dataModel.Date;
    return date;
    // this.dateChanged.next(date);
  }
}
