import { Injectable } from "@angular/core";

// Using this syntax instead of declaring the service in the app.module.ts providers section offers the 
// advantage of the lazy loading of the services.
@Injectable({providedIn: 'root'})
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
