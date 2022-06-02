import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, filter, switchMap, map, merge } from 'rxjs';


@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(
    // private store: Store<fromRoot.AppState>,
    private router: Router,
    // private investorProfileService: InvestorProfileService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  // canActivate(): Observable<UrlTree | boolean> {
  //   // const authenticate$ = this.store.select(fromRoot.selectUser).pipe(
  //     filter(user => user?.status !== ModelStatus.initial && is.authenticated(user)),
  //     switchMap(user =>
  //       this.investorProfileService.isWhiteListedEmail(user?.email || '').pipe(
  //         map(isWhitelisted => {
  //           if (!isWhitelisted) {
  //             this.store.dispatch(destroy());
  //           }
  //           return isWhitelisted;
  //         })
  //       )
  //     )
  //   );

  //   const unauthenticate$ = this.store.select(fromRoot.selectUser).pipe(
  //     filter(user => user?.status !== ModelStatus.initial && !is.authenticated(user)),
  //     map(() => {
  //       return this.router.parseUrl('/start');
  //     })
  //   );

  //   return merge(authenticate$, unauthenticate$);
  // }
}
