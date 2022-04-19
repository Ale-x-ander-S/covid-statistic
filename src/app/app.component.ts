import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public currentRoute!: string;
  private routerSub = new Subscription()


  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events.pipe(
      filter(el => el instanceof NavigationEnd)
    ).subscribe(data => {
      this.currentRoute = Object.values(data)[2]
    })
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe()
  }
}
