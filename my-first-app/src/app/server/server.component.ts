import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})


export class ServerComponent {
    serverId = 10;
    serverName = 'Server-10'
    serverStatus = 'OFFLINE';

    getServerName() {
        return this.serverName;
    }
}