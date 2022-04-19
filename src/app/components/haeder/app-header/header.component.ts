import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ApiService} from "../../../services/api.service";
import {Country} from "../../../interfaces/country.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() currentRoute!: string
  value: string = ''
  items!: Country[]

  subCountries: Subscription = new Subscription()

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.subCountries = this.apiService.getCountries().subscribe(data => {
      this.items = Object.values(data)[4]
    })
  }

  ngOnDestroy() {
    this.subCountries.unsubscribe()
  }
}
