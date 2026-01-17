import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { FormsModule } from '@angular/forms';
// import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name = signal("sagar ")
  age = 10

  userData = signal({
    title:"sagar rana",
    age:24,
    email:"sagar@gmail.com"
  })
  profileData = {
    title:"rana",
    age:40,
    email:"rana@gmail.com"
  }
  updateUserData(key:string , value:string){
    this.userData.update((item)=>({...item , [key]:value}))
  }
 

}
