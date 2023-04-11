import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../api/addtocart.service';
import { ApiService } from '../api/api.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ProductPageComponent } from '../productPage/productPage.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productList:any;
  constructor(private api:ApiService,private addtocartService:AddtocartService,private viewportScoller:ViewportScroller,private router:Router) { }
  todecor(){
    this.viewportScoller.scrollToAnchor("decor");
  }

  ngOnInit():void {
    this.api.getproduct()
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
