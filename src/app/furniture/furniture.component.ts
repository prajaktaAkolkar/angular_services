import { Component, OnInit } from '@angular/core';
import { ProductDetailsService} from '../product-details.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  furDetails :any
  constructor( private furnitur : ProductDetailsService ) {}

  ngOnInit(): void {
this.furDetails = this.furnitur.products();

  }
 
  onClick(){
// this.furDetails = this.furnitur.products();
  }
}
