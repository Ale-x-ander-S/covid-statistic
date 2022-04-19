import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {CountriesComponent} from "./components/contries/countries.component";
import {GeneralStatisticComponent} from "./components/home/general-statistic/general-statistic.component";

const routes: Routes = [
  {path: '', component: GeneralStatisticComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
