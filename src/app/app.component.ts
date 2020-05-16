import {Component, OnInit} from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {DataModel} from './shared/model/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataModelChange = new Observable<DataModel>();

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    // setTimeout(() => this.dataStorageService.fetchTest(),2000);
    this.dataStorageService.fetchModel().subscribe();
  }
  onFetchData() {

  }
}
