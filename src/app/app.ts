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
  users = signal(['batman','spider man','super man','iron man','thanos'])  
  usersDetails = signal([
  { id: 1,firstName: "Sagar",lastName: "Rana",email: "sagar.rana@example.com"  },
  {id: 2, firstName: "Amit",lastName: "Sharma",email: "amit.sharma@example.com" },
  
  {
    id: 3,firstName: "Priya",lastName: "Verma",email: "priya.verma@example.com" 
  },
  {
    id: 4, firstName: "Rahul", lastName: "Mehta",email: "rahul.mehta@example.com"
  },
  {
    id: 5, firstName: "Neha", lastName: "Singh", email: "neha.singh@example.com"
  }
]);

}
