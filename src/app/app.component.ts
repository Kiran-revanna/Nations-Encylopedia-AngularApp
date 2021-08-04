import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
// import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'countries';
  // update: boolean = false;

  constructor(private api: ApiService){

    // updates.available._subscribe((event) => {
    //   this.update = true;
    // })
  }

  ngOnInit(){
    // this.api.getAllCountires().subscribe((res)=>console.log(res));
  }
}
