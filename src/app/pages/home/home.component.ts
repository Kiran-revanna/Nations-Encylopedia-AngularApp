import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  searchFilter!: string;
  regions!: string[];
  selectedRegion!: string;
  countriesOri!: Country[];
  searchRegion!: any;

  constructor(private api:ApiService,private _router:Router) { }
  

  // Hooks Life Cyle initialized to preserve the data filtered
  ngOnInit(): void {
    if(localStorage.getItem('preserverRegion')){

      this.countries = JSON.parse(localStorage.getItem('preserverRegion') || '{}')
      this.api.getAllCountires().subscribe(response => {
        this. countriesOri = response
       
        let x = this.countriesOri.map(c => c.region).filter(res => res != "")
        let y = new Set(x)      
        this.regions = [...y]
        this.searchRegion = this.countries[0].region
      })
    }else {
      this.api.getAllCountires().subscribe(response => {
        this. countriesOri = response
        this.countries = this.countriesOri
        let x = this.countries.map(c => c.region).filter(res => res != "")
        let y = new Set(x)      
        this.regions = [...y]
      })
    }

  }
  //Function called from api.service
  getCountryDetails(id:String){
    console.log(id);
    this._router.navigate(['/country', id])
  }
  
  //Function to filter countries with respect to the input.
  searchCountry(){
    if(this.searchFilter != ''){
      this.countries = this.countries.filter(res => {     
        return res.name.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase()) || res.region.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase()) 
      })
    }else if(this.searchFilter == ''){
      this.ngOnInit()
    }
  }
  
  
  sortByKey(){
    
  }
//Function to observe the change.
  onChange(e: any){    
    if(e == 0){
      this.countries = this.countriesOri
    } else {
      this.countries = this.countriesOri.filter(res => {
        return res.region === e
      })
      localStorage.setItem('preserverRegion',JSON.stringify(this.countries))
    }
  }
}
