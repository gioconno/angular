import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private countSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.countSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.countSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error);
    }, () => {
      console.log('completed');
    });

  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }

}
