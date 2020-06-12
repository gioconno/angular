import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', { static: false }) myForm: NgForm;
  defaultQuestion = 'pet';
  defaultUsername = 'rik';
  answer = '';
  genders = ['male', 'female'];

  submitted = false;

  user = {
    username: '',
    email: '',
    gender: '',
    secret: '',
    answer: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // With form.setValue you have to fill all the components of the form
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'suggested@rik.com'
    //   },
    //   gender: 'male',
    //   secret: 'teacher',
    //   questionAnswer: 'Tomasoni'
    // });

    // With patchValue() you can provide a subset of the components
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // Example with only local reference
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // Example using @ViewChild
  onSubmit() {
    console.log(this.myForm);

    this.submitted = true;

    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.gender = this.myForm.value.gender;
    this.user.secret = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;

  }

}
