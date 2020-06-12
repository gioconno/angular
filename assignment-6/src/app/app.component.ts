import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', { static: false }) myForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];

  defaultSubscription = 'Advanced';

  submitted = false;

  submittedData = {
    email: '',
    sub: '',
    pwd: ''
  };

  onSubmit() {

    console.log(this.myForm);

    this.submitted = true;

    this.submittedData.email = this.myForm.value.email;
    this.submittedData.sub = this.myForm.value.subscription;
    this.submittedData.pwd = this.myForm.value.password;

    this.myForm.reset();

  }

}
