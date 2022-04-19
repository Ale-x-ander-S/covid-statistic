import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Country} from "../../interfaces/country.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

  title: string = 'Statistics per Countries'
  data!: Country[]
  selectedCountry!: Country
  newCovidFlag: number = NaN
  modal: boolean = false;
  subCountries: Subscription = new Subscription()

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
    this.subCountries = this.apiService.getCountries().subscribe(data => {
      this.data = Object.values(data)[4]
    })
  }

  onSelectedCountry(country: Country) {
    this.selectedCountry = country
    this.newCovidFlag = +this.selectedCountry.cases.new
    this.modal = true
  }

  ngOnDestroy() {
    this.subCountries.unsubscribe()
  }
}
