import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryMainComponent} from './countries/country-main/country-main.component';


const routes: Routes = [
  {path: '', component: CountryMainComponent },
  {path: ':id', component: CountryMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
