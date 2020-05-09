import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {DataModel} from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }

  fetchData() {
    return this.http.get<DataModel>('https://api.covid19api.com/summary');
  }
}
