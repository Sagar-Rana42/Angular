import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
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
  data:WritableSignal<string | number> = signal<string | number> ("sagar")
  speed:Signal<number | string> = computed <string | number> (()=>90)
  users:WritableSignal<number[]> = signal([1,2,3,4])
  updateData(){
    this.data.set("rana")
  }

  addUserId(){
    this.users.update((item)=>[...item, 8])
    console.log(this.users())
  }
  
 
}
