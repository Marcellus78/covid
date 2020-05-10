import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryDetailComponent} from './countries/country-detail/country-detail.component';


const routes: Routes = [
  {path: '', component: CountryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
