import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: any = undefined;
  cnt: number = 0;  
  @Output('counter') timerEvent = new EventEmitter<{counter: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStart = () => {
    this.onStop();
    this.timer = setInterval(() => { 
      this.cnt++;
      console.log('cnt: ' + this.cnt);
      this.timerEvent.emit({counter: this.cnt});
    }, 1000);    
  }

  onStop = () => {
    this.cnt = 0;
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
