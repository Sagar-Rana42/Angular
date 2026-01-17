import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  api_URL = "https://dummyjson.com/products"
 constructor(private productsApi : HttpClient){

 }
  getProducts(){
    return this.productsApi.get(this.api_URL)
  }

}
