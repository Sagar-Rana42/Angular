import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Child } from './child/child';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [FormsModule ,CommonModule, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
