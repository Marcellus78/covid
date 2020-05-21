import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {CountryDetailModel} from '../../shared/model/country-detail.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryDetailData: CountryDetailModel[] = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.countryDetailData = this.dataService.getCountryDetailData()
  }

  onGetData() {
    console.log(this.countryDetailData[0].Country);
    console.log(this.countryDetailData.length);
  }
}
