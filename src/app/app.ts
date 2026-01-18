import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [FormsModule ,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  userName= signal(["sagar","rana","abc","def",'ghi'])
  newUser = signal('')
  onChange(){
    this.userName.update((data)=>([...data , this.newUser()]))
    this.newUser.set('')
  }



}
