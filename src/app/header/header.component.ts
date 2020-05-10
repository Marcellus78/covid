import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  date: string;

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    // this.date= this.dataService.getDate();
  }
  onDate() {
    this.date= this.dataService.getDate();
  }

}
