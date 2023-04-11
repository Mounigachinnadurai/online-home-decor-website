import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../api/addtocart.service';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  public productList:any;
  constructor(private api:ApiService,private addtocartService:AddtocartService) { }
  ngOnInit():void {
    this.api.cup()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.addtocartService.addtocart(item);

  }
}
