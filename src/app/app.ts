import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
// import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  status = signal('loading')

  handleChange(event:Event){
    // console.log(event)
    const value = (event?.target as HTMLInputElement).value;
    this.status.set(value)
    // console.log((event.target as HTMLInputElement).value)
  }

}
