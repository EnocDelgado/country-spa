import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  // injecting service
  constructor( private countriesService: CountriesService ) {}

  searchByCountry( term: string ): void {
    this.countriesService.searchCountry( term )
     .subscribe( countries => {
       this.countries = countries;
     })
   }

}
