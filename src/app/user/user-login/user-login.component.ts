// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AuthenticationService } from 'src/app/shared/models/authentication.service';
// import { StateService } from 'src/app/state/state.service';

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.scss']
// })
// export class UserLoginComponent implements OnInit, OnDestroy {
//   formSubscription: any;
//   // state: any;
//   errorMessage: any;
//   // router: any;
//   public title = 'Remote Message Sending Receiving Consumer Software Module';

//   loginForm: FormGroup;
//   constructor(private authService: AuthenticationService, private state: StateService) {
//     this.title = 'Remote Message Sending Receiving Consumer Software Module';
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//     });
//   }

//   ngOnInit(): void {
//     this.formSubscription = this.state

//     // .pipe(
//     //   map(user => {
//     //     modelFilter(is.error(user), () => {
//     //       this.isLoadingToggle = false;
//     //       this.errorMessage = user?.errorMessage;
//     //     });
//     //     modelFilter(is.success(user) && is.authenticated(user), () =>
//     //       this.router.navigate(['user', 'options'])
//     //     );
//     //   })
//     // )
//     // .subscribe();
//   }

//   ngOnDestroy(): void {
//     this.formSubscription?.unsubscribe();
//   }


//   public onRegistrationSubmit() {

//     const { email, username } = this.loginForm?.value;

//     // this.router.navigate(['user', 'subscribe', 'pword']);
//   }
// }
