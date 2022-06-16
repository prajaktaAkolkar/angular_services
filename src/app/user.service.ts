import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUserAddress() {
    return {
      add: '15/3 Old Palasia'
    }
  }
}
