import {Injectable} from '@angular/core';
import {DataModel} from './data.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataModel: DataModel;

  setData(dataModel: DataModel) {
    this.dataModel = dataModel;
  }

  getGlobal() {

  }
  getCountries() {

  }
  getCountry() {

  }
  getDate() {
    const date = this.dataModel.Date;
    return date;
  }
}
