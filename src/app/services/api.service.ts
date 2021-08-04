import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Country } from '../types/api';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAllCountires(){
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name:string) {
     return this.http.get<Country[]>(`${this.api}/name/{name}`)
     .pipe(map(([res]) => res));
     
  }
  
  getCountryDetails(id: any){
    return this.http.get(`${this.api}/alpha/${id}`)
  }
}
