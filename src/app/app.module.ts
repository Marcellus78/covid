import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {CountriesComponent} from './countries/countries.component';
import {HeaderComponent} from './header/header.component';
import {CountryMainComponent} from './countries/country-main/country-main.component';
import {ChartsModule} from 'ng2-charts';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
