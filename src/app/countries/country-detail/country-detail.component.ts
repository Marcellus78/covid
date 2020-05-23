import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {CountryDetailModel} from '../../shared/model/country-detail.model';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryDetailData: CountryDetailModel[] = null;
  labels: string[] = [];
  allCases: number[] = [];
  newCases: number[] = [];
  activeCases: number[] = [];

  public lineChartData: ChartDataSets[] =[
    { data: [0,0, 0, 0, 0, 0, 0], label: 'Wszystkie' },
    { data: [0,0, 0, 0, 0, 0, 0], label: 'Dziennie' },
    { data: [0,0, 0, 0, 0, 0, 0], label: 'Aktywne' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public lineChartOptions: ChartOptions  = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.countryDetailData = this.dataService.getCountryDetailData()
    this.countryDetailData.map( data => {
      this.labels.push(data.Date.slice(0,10));
      this.allCases.push(data.Confirmed);
      this.activeCases.push(data.Active);
    });
    this.lineChartLabels = this.labels;
    this.setData(this.allCases,0);
    this.newCases= this.caseCalculate(this.allCases);
    this.setData(this.newCases, 1);
    this.setData(this.activeCases,2);

  }

  onGetData() {
    console.log(this.countryDetailData[0].Country);
    console.log(this.countryDetailData.length);
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  private setData(chartData: number[], index: number) {
    this.lineChartData[index].data = chartData;
  }
  private caseCalculate(casesArray: number[]): number[] {
      let cases: number[] = [];
      let tempCase: number = 0;
      for (let _i = 0; _i < casesArray.length; _i++){
        cases.push(casesArray[_i] - tempCase);
        tempCase = casesArray[_i];
      }
      return cases;
  }
}
