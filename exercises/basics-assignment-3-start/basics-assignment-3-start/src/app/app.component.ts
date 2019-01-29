import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean = true;
  clicks = []
  cnt: number = 0;

  onClick = () => {
    this.display = !this.display;
    this.cnt++;
    this.clicks.push(this.cnt);
  }

  getColor = (log: number) => {
    if (log > 5) {
      return 'blue';
    }
    return null;
  }
}
