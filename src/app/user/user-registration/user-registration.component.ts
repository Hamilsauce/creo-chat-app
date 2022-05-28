// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';
// // import { modelFilter, predicates as is } from '../../../common/helpers/predicates';
// // import { UserAuthenticationType } from '../../../common/models/user.model';
// // import * as fromRoot from '../../../common/state';
// // import { loadUser, loginUser } from '../../state/actions/user.actions';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './user-registration.component.html',
//   styleUrls: ['./user-registration.component.scss']
// })
// export class UserRegistrationComponent implements OnInit, OnDestroy {
//   formSubscription: any;
//   errorMessage: any;
//   title: string;
//   registrationForm: FormGroup;
//   constructor(private ) {
//     this.title = 'Remote Message Sending Receiving Consumer Software Module';
//     this.registrationForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//     });
//   }

//   ngOnInit(): void {
//     this.formSubscription = this.store
//       .select(fromRoot.selectUser)
//       .pipe(
//         map(user => {
//           modelFilter(is.error(user), () => {
//             this.isLoadingToggle = false;
//             this.errorMessage = user?.errorMessage;
//           });
//           modelFilter(is.success(user) && is.authenticated(user), () =>
//             this.router.navigate(['user', 'options'])
//           );
//         })
//       )
//       .subscribe();
//   }

//   ngOnDestroy(): void {
//     this.formSubscription?.unsubscribe();
//   }
//   public onRegistrationSubmit() {

//     const { email } = this.registrationForm?.value;
//     this.isLoadingToggle = true;
//     this.store.dispatch(
//       loadUser({
//         user: {
//           subscriberEmail: email,
//         },
//       })
//     );

//     this.router.navigate(['user', 'subscribe', 'pword']);
//   }
// }
