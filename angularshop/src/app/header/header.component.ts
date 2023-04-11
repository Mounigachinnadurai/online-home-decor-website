import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../api/addtocart.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem :number=0;
  constructor(private addtocartService:AddtocartService,private viewportScoller:ViewportScroller,private router:Router) { }
  todecor(){
    this.viewportScoller.scrollToAnchor("decor");
  }

  ngOnInit():void {
    this.addtocartService.getproduct()
    .subscribe((res: string | any[])=>{
      this.totalItem=res.length;
    })
  }

}
