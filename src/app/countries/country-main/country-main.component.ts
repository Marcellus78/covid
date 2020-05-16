import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {CountryData} from '../../shared/model/country.model';
import {Subscription} from 'rxjs';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {DataStorageService} from '../../shared/data-storage.service';

export interface GlobalData {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number
}

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-main.component.html',
  styleUrls: ['./country-main.component.css']
})
export class CountryMainComponent implements OnInit{

  id: string = '';
  data: Subscription;
  country: CountryData = null;
  globalData: GlobalData = null;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] =
    ['NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered', 'TotalRecovered'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartColors: Color[] = [
    { backgroundColor: 'green' },
    { backgroundColor: 'red' },
  ]
  public barChartData: ChartDataSets[] = [
    { data: [0,0,0,0,0,0], label: 'Global' },
  ];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id) {
        this.country = this.dataService.getCountryData(this.id);
      } else {
        this.data = this.dataService.dataModelChanged.subscribe( response => {
          this.globalData = response.Global;
          this.setChartData(this.globalData);
        })
      }
    });
  }
  onCountryDetail() {
    this.router.navigate(['/detail']);
  }
  private setChartData(data: GlobalData){
    const newData = [
      data.NewConfirmed,
      data.TotalConfirmed,
      data.NewDeaths,
      data.TotalDeaths,
      data.NewRecovered,
      data.TotalRecovered
    ];
    this.barChartData[0].data = newData;
  }
}
