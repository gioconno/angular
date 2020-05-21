import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

  }

  // All this part (paramsSubscription) isn't necessary because Angular is taking care of the unsubscription of the component.
  // Without Angular taking care of this part (e.g. in your custom subscription), you should provide this logic.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
