import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private logService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
   }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccont(accountName, accountStatus); 
    //this.logService.logStatusChange(accountStatus);
  }
}
