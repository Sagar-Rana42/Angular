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

  height = signal(100)
  width  = signal(40)

  area = computed(()=> this.height() * this.width())
  updateHeight(){
    this.height.set(this.height()+10) 
  }
}
