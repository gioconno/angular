import { Component, OnInit } from '@angular/core';

@Component({

  // selector: 'app-servers' // tag
  // selector: '[app-servers]', // attributo
  selector: '.app-servers', // classe
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
