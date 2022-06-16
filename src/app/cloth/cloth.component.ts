import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {

     clothDetails :any;
  constructor(private proDetails : ProductDetailsService) {
   }

   
   ngOnInit(): void {
   this.clothDetails=this.proDetails.products();

  }
  
  // onClick(){
  //  this.clothDetails=this.proDetails.products();
  // }
}
