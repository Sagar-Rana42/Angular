import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})

export class Event {
  input_value = ""
  
  handleClickEvent(event:MouseEvent){
    console.log(event)
    console.log((event.target as Element).className)
    alert("button Clicked")
  }
  mouseEnterEvent(event:MouseEvent){
    alert("Mouse enter event trigger")
  }
  mouseLeaveEvent(event:MouseEvent){
    alert("Mouse enter event trigger")
  }
  // inputEvent(event:InputEvent){
  //   // alert(`(event.target as HTMLInputElement).value`)
  //   console.log(event.target as HTMLInputElement)
  // }
}
