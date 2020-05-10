import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../shared/data.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  date = '';
  private dateChanged: Subscription;

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    this.dateChanged = this.dataService.dataModelChanged
      .subscribe( dataModel => {
        this.date = dataModel.Date
        console.log('header');
      })
  }


  onDate() {
    this.date = this.dataService.getDate();
  }

}
