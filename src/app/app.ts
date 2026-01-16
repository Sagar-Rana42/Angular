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
 name:WritableSignal<string> = signal("") 
  setValue(val:string){
   this.name.set(val)
  }

  setDefaultValue(){
    this.name.set("sagar rana")
  }
  
 
}
