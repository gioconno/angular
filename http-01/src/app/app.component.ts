import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedUsers = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchUsers();
  }

  onCreateUser(userData: { name: string; job: string }) {
    // Send Http request
    // this.http.post('https://reqres.in/api/users', userData)
    //   .subscribe(responseData => {
    //     console.log(responseData);
    //   });

    this.http.post('https://ng-complete-guide-bfe52.firebaseio.com/users.json', userData)
      .subscribe(responseData => {
        console.log(responseData);
      });

  }

  onFetchUsers() {
    this.fetchUsers();
  }

  onClearUsers() {
    // Send Http request
  }

  private fetchUsers() {
    // this.http.get('https://reqres.in/api/users').subscribe(users => {
    //   console.log(users);
    // });

    this.http.get('https://ng-complete-guide-bfe52.firebaseio.com/').subscribe(users => {
      console.log(users);
    });
  }
}
