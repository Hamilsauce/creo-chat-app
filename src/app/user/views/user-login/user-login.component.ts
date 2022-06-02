import { HttpStatusCode } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StateService } from 'src/app/state/state.service';


export type LoginPanelState = 'login' | 'register';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit, OnDestroy {
  public title = 'Remote Message Sending Receiving Consumer Software Module';
  panelState: LoginPanelState = 'login';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm: FormGroup
  registrationForm: FormGroup
  userRegistrationSubscription?: Subscription;
  loginSubscription?: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthenticationService) {
    this.loginForm = new FormGroup(
      {
        loginEmail: new FormControl(null, [Validators.required]),
        loginPassword: new FormControl('', [Validators.required]),
      },
      [],
      []
    );
    this.registrationForm = new FormGroup(
      {
        registrationEmail: new FormControl(null, [Validators.required]),
        registrationPassword: new FormControl(null, [Validators.required]),
        registrationUsername: new FormControl(null, [Validators.required]),
      },
      [],
      []
    );
  }

  ngOnInit(): void { }
  ngOnDestroy(): void { }


  setPanelState(state: LoginPanelState) {
    this.panelState = state;
  }

  onLogInSubmit({ controls }: FormGroup) {
    const { loginEmail, loginPassword } = controls;

    this.loginSubscription = this.authService.authenticateUser({ email: loginEmail.value, password: loginPassword.value })
      .pipe(
        take(1),
        tap(x => console.warn('IN LOGIN SUBMIT', typeof x, { x })),
        tap(({ body, status }) => {
          console.log('body, status ', { body, status });

          if (status === HttpStatusCode.Ok || status === HttpStatusCode.Created) {
            this.router.navigate(['dashboard'], {
              state: { user: body },

            })
          }
        }),
      )
      .subscribe()
  }

  onRegistrationSubmit({ controls }: FormGroup) {
    const { registrationEmail, registrationPassword, registrationUsername } = controls;
    this.userRegistrationSubscription = this.authService.registerUser({ username: registrationUsername.value, email: registrationEmail.value, password: registrationPassword.value })
      .pipe(
        tap(x => this.setPanelState('login'))
      )
      .subscribe()
  }
}
