import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';
import {DataService} from '../shared/data.service';
import {CountryDetailModel} from '../shared/model/country-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<CountryDetailModel[]>{

  constructor(private dataStorageService: DataStorageService,
              private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(route.params['countryId']);
    const country = route.params['countryId'];
    return  this.dataStorageService.fetchCountry(country);

  }
}
