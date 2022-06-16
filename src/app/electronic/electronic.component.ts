import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details.service'
@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  electData :any;
  constructor(private electProduct : ProductDetailsService) { }

  
  ngOnInit(): void {
    this.electData = this.electProduct.products();
  }
  
//   onClick(){
//  this.electData = this.electProduct.products();
//   }
}
