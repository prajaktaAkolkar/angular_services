import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
onEnClick(){
  alert('Thanku!!!!')
}
  constructor() { }
  products (){
   
    return [
      {
          img : "../assets/images/shoes.jpeg",
          name: ' Shoe',
          price: '230$',
          color: 'red',
          size: 4-5,
          category: 'footware'
      },{
          img : "../assets/images/download.jpeg",
          name: 'chair',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'furniture'
      },{
          img : "../assets/images/washing.jpeg",
          name: 'washing mashine',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'electronic'
      },{
          img : "../assets/images/winterJacket.png",
          name: 'winter cloths',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'cloath'
      },{
          img : "../assets/images/fridge.jpeg",
          name: 'refigirator',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'electronic'
      },{
          img : "../assets/images/AC.jpeg",
          name: 'AC',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'electronic'
      },{
          img : "../assets/images/download (1).jpeg",
          name: 'Table',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'furniture'
      },{
          img : "../assets/images/menCloth.jpeg",
          name: 'Men Cloth',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'cloath'
      },{
          img : "../assets/images/kidsToy.jpeg",
          name: 'children cloth',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'cloath'
      },{
        img : "../assets/images/phone.jpeg",
          name: 'phone',
          price: '230$',
          color: 'red',
          size: '45',
          category: 'electronic'
      },
      {
        img : "../assets/images/kidsToy.jpeg",
        name: 'Truck',
        price: '230$',
        color: 'yello',
        size: '45',
        category: 'Kids Toys'
    }
    ]
}
}
