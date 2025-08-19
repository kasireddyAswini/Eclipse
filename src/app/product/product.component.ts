import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product:any;
  allp:any;
  constructor(private route:ActivatedRoute,private p:TestService){}

    ngOnInit():void{
      this.allp=this.p.products;
      this.route.paramMap.subscribe(
        params=>{
          let id=+params.get('id')!;
          this.product=this.p.products.find(p=>p.id==id);
        }
      )
  }
}
