import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})

export class CardCountryComponent implements OnInit {

  @Input() selectedCountry!: Country

  @Input() selectedCountryInput!: Country

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()

  country!: string
  active!: number
  critical!: number
  new!: string
  recovered!: string
  newDeath!: number

  ngOnInit(): void {
    this.country = this.selectedCountry.country.split('-').join(' ')
    this.selectedCountry.cases.active === null ? this.active = 0 : this.active = this.selectedCountry.cases.active
    this.selectedCountry.cases.critical === null ? this.critical = 0 : this.critical = this.selectedCountry.cases.critical
    this.selectedCountry.cases.new === null ? this.new = '0' : this.new = this.selectedCountry.cases.new
    this.selectedCountry.cases.recovered === null ? this.recovered = '0' : this.recovered = this.selectedCountry.cases.recovered
    this.selectedCountry.deaths.new === null ? this.newDeath = 0 : this.newDeath = this.selectedCountry.deaths.new
  }

  closeCard() {
    this.close.emit()
  }
}
