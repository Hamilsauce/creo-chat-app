import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from './shared/services/authentication.service';
import { Subscription, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  public title = 'Remote Message Sending Receiving Consumer Software Module';
  // registrationForm = 'Remote Message Sending Receiving Consumer Software Module';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm: FormGroup
  registrationForm: FormGroup
  // accordian: MatA
  userRegistrationSubscription?: Subscription;
  loginSubscription?: Subscription;

  constructor(private authService: AuthenticationService) {
    this.loginForm = new FormGroup(
      {
        loginEmail: new FormControl(0, [Validators.required]),
        loginPassword: new FormControl(0, [Validators.required]),
      },
      [],
      []
    );
    this.registrationForm = new FormGroup(
      {
        registrationEmail: new FormControl(0, [Validators.required]),
        registrationPassword: new FormControl(0, [Validators.required]),
      },
      [],
      []
    );
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  onLogInSubmit({ controls }: FormGroup) {
    // console.log({ form });
    const { loginEmail, loginPassword } = controls;
    this.loginSubscription = this.authService.authenticateUser({ username: 'newuser1', email: loginEmail.value, password: loginPassword.value })
      .pipe(
        tap(x => console.warn('IN LOGIN SUBMIT')
        )

      )
      .subscribe()
  }

  onRegistrationSubmit({ controls }: FormGroup) {
    // console.log({ form });
    const { registrationEmail, registrationPassword } = controls;
    this.userRegistrationSubscription = this.authService.registerUser({ username: 'newuser1', email: registrationEmail.value, password: registrationPassword.value })
      .pipe(
        tap(x => console.warn('IN onRegistrationSubmit SUBMIT')

        ))
      .subscribe()
  }

}
