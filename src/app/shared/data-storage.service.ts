import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {DataModel} from './data.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

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
}
