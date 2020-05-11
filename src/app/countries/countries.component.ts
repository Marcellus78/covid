import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {Subscription} from 'rxjs';
import {CountryData} from '../shared/country.model';

@Component({
  selector: 'app-coutries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{

  countries: CountryData[];
  countriesChanged: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.countriesChanged = this.dataService.countriesChanged
      .subscribe((countries: CountryData[]) => {
        this.countries = countries;
      });

  }
  onDataCheck() {
    console.log(this.countries.length);
  }

}
