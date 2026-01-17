import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgFor],
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
 
  isLogin = signal(true)
  users = signal([1,2,3,4])

  students= ["sagar" ,"rana","kumar","jalie"]
  studentData = [
    {
      name:"sagar",
      age:23,
      email:"sagar@gmail.com"
    },
    {
      name:"rana",
      age:43,
      email:"rana@gmail.com"
    }

  ]

}
