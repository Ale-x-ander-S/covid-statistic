import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "countryName"})

export class CountryPipe implements PipeTransform {

  transform(country: string): string {
    return country.split('-').join(' ')
  }
}
