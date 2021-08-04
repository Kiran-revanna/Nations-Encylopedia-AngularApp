import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  constructor(){

  }
  @Input() country?: Country;



}

