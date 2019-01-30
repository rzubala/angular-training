import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onCounter = (data: {counter: number}) => {
    console.log('counter event: ', data.counter);
    if (data.counter % 2 === 0) {
      this.evens.push(data.counter);
    } else {
      this.odds.push(data.counter);      
    }
  }
}
