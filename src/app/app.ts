import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [FormsModule , Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
/*
  
  productData:any = signal({})
  constructor(private productService:Api){

  }
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      this.productData.set(data)
      // console.log(data)
      // console.log("product data = " ,this.productData().products)
    })
  }
    */
 
 
  userName= signal(["sagar","rana","abc","def",'ghi'])



}
