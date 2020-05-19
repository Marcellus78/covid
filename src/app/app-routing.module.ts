import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryMainComponent} from './countries/country-main/country-main.component';
import {CountryDetailComponent} from './countries/country-detail/country-detail.component';
import {CountryResolverService} from './countries/country-resolver.service';


const routes: Routes = [
  {path: '', component: CountryMainComponent},
  {path: 'detail', component: CountryDetailComponent},
  {path: ':id', component: CountryMainComponent},
  {path: 'detail/:countryId', component: CountryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
