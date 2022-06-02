// import { Injectable } from '@angular/core';
// import { CanActivate, Router, UrlTree } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { filter, map, switchMap, take, tap } from 'rxjs/operators';
// import { modelFilter, predicates as has } from '../../common/helpers/predicates';
// import { ModelStatus } from '../../common/models/base.model';
// import { UserAuthenticationStatus } from '../../common/models/user.model';
// import * as fromRoot from '../../common/state';
// import { loadProfile } from '../state/actions/investor-profile.actions';

// const VERIFY_URL = '/user/verify';
// const PROFILE_NAME = '/user/profile/name';
// const PROFILE_USERNAME = '/user/profile/username';

// @Injectable()
// export class SubscriptionVerifiedGuard implements CanActivate {
//   constructor(private store: Store<fromRoot.AppState>, private router: Router) {}

//   canActivate(): Observable<UrlTree | boolean> {
//     return this.store.select(fromRoot.selectUser).pipe(
//       filter(user => user?.authenticationStatus === UserAuthenticationStatus.authenticated),
//       take(1),
//       tap(user => {
//         this.store.dispatch(loadProfile({ uid: user?.uid }));
//       }),
//       switchMap(user =>
//         this.store.select(fromRoot.selectProfile).pipe(
//           filter(
//             profile =>
//               profile?.status !== ModelStatus.initial && profile?.status !== ModelStatus.loading
//           ),
//           take(1),
//           map(profile => {
//             let allow = true;
//             let redirectUrl = '';

//             modelFilter(!has.emailVerified(user), () => {
//               allow = false;
//               redirectUrl = VERIFY_URL;
//             });

//             modelFilter(!has.userName(profile), () => {
//               allow = false;
//               redirectUrl = PROFILE_USERNAME;
//             });

//             modelFilter(!has.namePopulated(profile), () => {
//               allow = false;
//               redirectUrl = PROFILE_NAME;
//             });

//             return allow ? allow : this.router.parseUrl(redirectUrl);
//           })
//         )
//       )
//     );
//   }
// }
