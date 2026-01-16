import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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
  speed = signal(0)
  color = 'black'

  constructor(){
    effect(()=>{
      if(this.speed() > 0 && this.speed() <= 80){
        this.color= 'green'
      }
      if(this.speed() > 80 && this.speed() <= 100){
        this.color = 'orange'
      }
      if(this.speed() > 100 ){
        this.color = 'red'
      }
    })
  }

  increaseSpeed(){
    this.speed.set(this.speed() + 10)
  }
 
}
