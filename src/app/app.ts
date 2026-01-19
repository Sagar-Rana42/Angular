import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Child } from './child/child';
import { TrimaTextPipe } from './custom-pipe/trima-text-pipe';
// import Date

@Component({
  selector: 'app-root',
  imports: [FormsModule ,CommonModule , TrimaTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
  value = ''
  mobile = "samsung"
  date = "12/02/2025"
  amount = "1000"
  today = new Date()

  users = signal({name:"sagar" , age:20, email:"sr@gmail.com"})

  title = signal("Pipes in Angular")
}
