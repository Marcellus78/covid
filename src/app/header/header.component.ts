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

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    this.date = this.dataService.getLastUpdated();
  }

}
