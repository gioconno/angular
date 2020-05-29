import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private userActivatedSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userActivatedSubscription = this.userService.activatedEmitter.subscribe(isActivated => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy() {
    this.userActivatedSubscription.unsubscribe();
  }
}
