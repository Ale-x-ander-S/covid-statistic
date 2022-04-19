import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';

import {ChartsModule} from "ng2-charts";

import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/haeder/app-header/header.component";
import {ComboBoxComponent} from "./components/haeder/combo-box/combo-box.component";
import {GeneralStatisticComponent} from "./components/home/general-statistic/general-statistic.component";
import {PieChartComponent} from "./components/home/pie-chart/pie-chart.component";
import {CountriesComponent} from "./components/contries/countries.component";
import {AboutComponent} from './components/about/about.component';
import {CardCountryComponent} from "./components/card/card-country.component";


import {CountryPipe} from "./pipes/country.pipe";

import {AuthInterceptor} from "./services/auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralStatisticComponent,
    PieChartComponent,
    CountriesComponent,
    CardCountryComponent,
    CountryPipe,
    AboutComponent,
    ComboBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    EventPluginsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
