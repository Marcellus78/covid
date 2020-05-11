import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  date = '';
  private dateChanged: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dateChanged = this.dataService.dateChanged
      .subscribe( date =>{
        this.date = date;
        console.log('footer');
      })
  }
}
