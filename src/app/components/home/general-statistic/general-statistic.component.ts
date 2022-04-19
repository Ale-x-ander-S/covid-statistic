import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Subscription} from "rxjs";
import {Country} from "../../../interfaces/country.interface";

@Component({
  selector: 'app-general-statistic',
  templateUrl: './general-statistic.component.html',
  styleUrls: ['./general-statistic.component.scss']
})
export class GeneralStatisticComponent implements OnInit, OnDestroy {

  title: string = 'World Statistics Covid-19';
  data!: Country[]
  recoveredPercent: number = 0
  newInfections: number = 0
  deathPercent: number = 0
  deadPer1000: number = 0
  recovered: number = 0
  critical: number = 0
  active: number = 0
  death: number = 0
  date = new Date()

  subCountries: Subscription = new Subscription()

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
    this.subCountries = this.apiService.getCountries().subscribe(data => {
      this.data = Object.values(data)[4]

      for (let i = 0; i < this.data.length; i++) {
        this.newInfections += +this.data[i].cases.new
        this.recovered += +this.data[i].cases.recovered
        this.active += +this.data[i].cases.active
        this.critical += +this.data[i].cases.critical
        this.death += +this.data[i].deaths.total
      }
      let sum = this.recovered + this.death
      let percent = sum / 100
      this.deathPercent = +(this.death / percent).toFixed(2)
      this.recoveredPercent = +(this.recovered / percent).toFixed(2)
      this.deadPer1000 = +(this.recovered / 100 / this.death).toFixed(2)
    })
  }

  ngOnDestroy() {
    this.subCountries.unsubscribe()
  }
}
