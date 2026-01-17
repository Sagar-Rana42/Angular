import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  productData : any = signal([])
  constructor(private apiServices:Api){
    // console.log("service called")
  }



  // ngOnInit(){
  //   let data = this.apiServices.getUser()
  //   console.log(data)
  //   this.productData.set(data)
  // }
  loadData(){
    let data = this.apiServices.getUser()
    console.log(data)
    this.productData.set(data)
  }

}
