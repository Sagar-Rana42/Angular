import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;

  updateValue(){
    this.count++;
  }

  resetValue(){
    this.count = 0;
  }

  decrementValue(){
    this.count--;
  }
}
