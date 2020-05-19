import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataModel} from '../shared/model/data.model';
import {DataStorageService} from '../shared/data-storage.service';
import {DataService} from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<DataModel>{

  constructor(private dataStorageService: DataStorageService,
              private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const data = this.dataService.getData();

      if(data === null) {
        this.dataStorageService.fetchModel();
        console.log(data);
      } else {
        return data;
      }

  }
}
