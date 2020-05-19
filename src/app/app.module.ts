import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {CountriesComponent} from './countries/countries.component';
import {HeaderComponent} from './header/header.component';
import {CountryMainComponent} from './countries/country-main/country-main.component';
import {ChartsModule} from 'ng2-charts';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import {DataStorageService} from './shared/data-storage.service';

export function initializeApp(dataStorageService: DataStorageService) {

  return (): Promise<any> => {
    return dataStorageService.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CountriesComponent,
    HeaderComponent,
    CountryMainComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [DataStorageService,
    {provide: APP_INITIALIZER, useFactory: initializeApp, deps: [DataStorageService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
