import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})


export class ServerComponent {
    serverId = 10;
    serverName = 'Server-10';
    serverStatus = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerName() {
        return this.serverName;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}