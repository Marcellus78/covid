import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {CountriesComponent} from './countries/countries.component';
import {HeaderComponent} from './header/header.component';
import {CountryDetailComponent} from './countries/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CountriesComponent,
    HeaderComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
