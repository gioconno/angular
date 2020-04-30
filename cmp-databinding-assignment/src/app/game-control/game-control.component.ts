import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() event = new EventEmitter<number>();

  emittingEvent;
  eventCount = 0;

  constructor() { }

  ngOnInit() {

  }

  onStartClick() {
    this.emittingEvent = setInterval(() => {
      this.event.emit(this.eventCount);
      this.eventCount++;
    }, 1000);
 }

  onStopClick() {
    clearInterval(this.emittingEvent);
  }

}
