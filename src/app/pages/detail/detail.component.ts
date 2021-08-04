import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  details: any;
  borders: any = [];
  

  constructor(private route:ActivatedRoute,
              private router:Router,
              private _service: ApiService ) {  
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.getDetailsOfCountry(this.id)

    })  
    // https://restcountries.eu/rest/v2/alpha/IND
  }
  
  // To get country details from Boreder
  getCountryDetails(id:any){
    this.router.navigate(['/country' , id])        
    // this.getDetailsOfCountry(id)
  }
  //To get country details present in border region
  getDetailsOfCountry(id:String){
    this.borders.length = 0
    this._service.getCountryDetails(id).subscribe((response: any) => {
        this.details = response     
        this.details.borders.forEach((ele: any) => {
          this._service.getCountryDetails(ele).subscribe((res: any) => {
            this.borders.push(res)   
          })
        });
    })
  }

  goHome(){
    this.router.navigate(['/'])
  }
}
