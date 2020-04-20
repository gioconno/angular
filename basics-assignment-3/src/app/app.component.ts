import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isParagraphRendered = false;
  logs = [];

  constructor() {
    this.isParagraphRendered = false;
  }

  toggleParagraph() {
   this.isParagraphRendered = !this.isParagraphRendered;
   this.logs.push(new Date().toISOString() + ' - Paragraph toggled (new value [' + this.isParagraphRendered + '])');
  }

}
