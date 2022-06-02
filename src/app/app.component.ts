import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from './shared/services/authentication.service';
import { of, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

export type LoginPanelState = 'login' | 'register';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Remote Message Sending Receiving Consumer Software Module';
  // registrationForm = 'Remote Message Sending Receiving Consumer Software Module';
  // panelState: LoginPanelState = 'login';
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // loginForm: FormGroup
  // registrationForm: FormGroup
  // accordian: MatA
  userRegistrationSubscription?: Subscription;
  loginSubscription?: Subscription;
  routeSubscription?: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthenticationService) {
    this.routeSubscription = of(this.router.getCurrentNavigation()?.extras.state)
    .pipe(
      tap((state: any) => {
        console.log('state', state);
      }),
      //   filter(params => params.tid === undefined),
      //   mergeMap(() => {
      //     return this.sendInvestorDeposit().pipe(
      //       filter(_ => !Array.isArray(_)),
      //       tap(tid => {
      //         this.routeToChild('payment', { tid });
      //       })
      //     );
      //   })
    )
    .subscribe();
  }



  setPanelState(state: LoginPanelState) {
    // this.panelState = state;
  }


  // onLogInSubmit({ controls }: FormGroup) {
  //   const { loginEmail, loginPassword } = controls;

  //   this.loginSubscription = this.authService.authenticateUser({ username: 'newuser1', email: loginEmail.value, password: loginPassword.value })
  //     .pipe(
  //       tap(x => console.warn('IN LOGIN SUBMIT', typeof x,{x})),
  //       tap(res => {
  //         if (res.status === HttpStatusCode.Ok || res.status === HttpStatusCode.Created) {
  //           // this.router.navigate(['dashboard'], {
  //           //   state: { user: res },
  //           //   relativeTo: this.activatedRoute
  //           // })
  //         }
  //       }),
  //     )
  //     .subscribe()
  // }

  // onRegistrationSubmit({ controls }: FormGroup) {
  //   const { registrationEmail, registrationPassword } = controls;
  //   this.userRegistrationSubscription = this.authService.registerUser({ username: 'newuser1', email: registrationEmail.value, password: registrationPassword.value })
  //     .pipe(
  //       tap(x => console.warn('IN onRegistrationSubmit SUBMIT')

  //       ))
  //     .subscribe()
  // }

}
