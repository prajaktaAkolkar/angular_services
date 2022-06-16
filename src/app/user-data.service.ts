import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [ 
      {name:'peter', age :29, email :'peter@gmail.com'},
      {name : 'Sam', age:30, email : 'sam@gmail.com'},
      {name:'Bruce',age : 25, email : 'bruce@gmail.com'},
      { name:'ram' , age:36, email :'ram@gmail.com'}
    ]
  }
 

}
