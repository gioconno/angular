import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [];

  onEvent(number: number) {
    this.events.push({
      type: number % 2 == 0 ? 'even' : 'odd',
      number: number
    });
  }

}
