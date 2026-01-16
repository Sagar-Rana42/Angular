import { Component, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basics');

  
  // btnDisable = false
  data = 10;

  count = signal(30)

  constructor(){
    effect(()=>{
      // console.log("this is data " , this.data)
      console.log("this is count " , this.count())
    })
  }
  updateCount(){
    this.count.set(this.count() + 1)
  }

  updateData(){
    this.data ++;
  }

}
