import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DataService} from '../../shared/data.service';
import {CountryDetailModel} from '../../shared/model/country-detail.model';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  subscription: Subscription;
  countryDetailData: CountryDetailModel[] = null;

  constructor(private dataService: DataService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchCountry().subscribe();
    this.subscription = this.dataService.countryChanged.subscribe(data => {
      this.countryDetailData = data;
    });
  }
  onGetData() {
    console.log(this.countryDetailData[0].Country);
  }
}
