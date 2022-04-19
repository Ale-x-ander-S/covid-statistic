import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Country} from "../interfaces/country.interface";
import {catchError, Observable} from "rxjs";

@Injectable({providedIn: "root"})

export class ApiService {

  private readonly urlCountries = "https://covid-193.p.rapidapi.com/statistics"
  errorMessage: string = ''

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country> {
    return this.http.get<Country>(this.urlCountries).pipe(

      catchError(err => {
        this.errorMessage = err.message
        return []
      })
    )
  }
}
