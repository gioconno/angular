import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

// @Injectable() decorator should be placed on classes that need something to be injected in them.
// But in latest versions on Angular, it is suggested to place this decorator on both sides
// (source classes and destination classes), for future uses.
@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) { }

    addAccont(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
