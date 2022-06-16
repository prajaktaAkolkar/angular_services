import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service';


@Component({
  selector: 'app-footware',
  templateUrl: './footware.component.html',
  styleUrls: ['./footware.component.css']
})
export class FootwareComponent implements OnInit {
  footWare :any;
  constructor( private footProduct : ProductDetailsService) { }

  ngOnInit(): void {
      this.footWare = this.footProduct.products();

  }


   onClick(){
      // this.footWare = this.footProduct.products();
   }
}
