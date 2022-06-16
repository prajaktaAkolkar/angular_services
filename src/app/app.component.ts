import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {UserDataService} from './user-data.service';
import {ProductDetailsService} from './product-details.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service_pract';
  value:any;
  product:any;
  fur: boolean = false;
  fut: boolean = false;
  elect: boolean = false;
  cloth: boolean = false;
 cate:any;
 value1 :Array<string> =[];
  uniqueAges:Array<string> =[];
  productDet: any;
  // constructor(private userData : UserDataService ,prodet : ProductDetailsService){
  //   console.log('from app.ts file', userData.users());
  //   this.value = userData.users();
  // }
  constructor(private prod : ProductDetailsService) {
    this.product = this.prod.products();
    console.log(this.product)
    this.product.forEach((element: any) => this.value1.push(element.category));
   
    console.log(this.value1)
    const unique = (value: any, index: any, self: string | any[]) => {
      return self.indexOf(value) === index
    }
    
    this.uniqueAges = this.value1.filter(unique)
    

  }

  onClick(val:any){
console.log(val);
  console.log(this.product)
   this.productDet =this.product.filter((o: { category: any; })=>o.category==val)
  console.log(this.productDet);
  }

  onFur(){
    this.fur = true;
    this.fut = false;
    this.elect =false;
    this.cloth =false;
  }

  onFoot(){
    this.fut = true;
    this.fur = false;
    this.elect = false;
    this.cloth =false;
  }
  onElect(){
    this.elect = true
    this.fut = false;
    this.fur = false;
    this.cloth =false;
  }

  onCloth(){
    this.cloth = true;
    this.elect = false
    this.fut = false;
    this.fur = false;
  }

 
}
