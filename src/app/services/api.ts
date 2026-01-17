import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(){
    console.log("service called")
  }
  getUser(){
    return [
      {id:1, name:'mobile', price:90000},
      {id:2, name:'charger', price:1000},
      {id:3, name:'laptop', price:100000},
      {id:4, name:'machine', price:10250},
      {id:5, name:'iron', price:1000},
    ]
  }
}
