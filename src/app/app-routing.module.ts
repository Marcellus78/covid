import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryMainComponent} from './countries/country-main/country-main.component';
import {CountryDetailComponent} from './countries/country-detail/country-detail.component';


const routes: Routes = [
  {path: 'detail', component: CountryDetailComponent},
  {path: 'detail/:countryId', component: CountryDetailComponent},
  {path: '', component: CountryMainComponent},
  {path: ':id', component: CountryMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
