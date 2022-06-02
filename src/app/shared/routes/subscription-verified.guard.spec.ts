// import { TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { UserAuthenticationStatus } from '../../common/models/user.model';
// import { SubscriptionVerifiedGuard } from './subscription-verified.guard';

// describe('SubscriptionVerifiedGuard', () => {
//   let guard: SubscriptionVerifiedGuard;
//   let routerSpy: jasmine.SpyObj<Router>;
//   let mockStore: MockStore;

//   beforeEach(() => {
//     routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);

//     TestBed.configureTestingModule({
//       providers: [
//         SubscriptionVerifiedGuard,
//         {
//           provide: Router,
//           useValue: routerSpy,
//         },
//         provideMockStore(),
//       ],
//     });

//     guard = TestBed.inject(SubscriptionVerifiedGuard);
//     mockStore = TestBed.inject(MockStore);
//   });

//   describe('canActivate', () => {
//     it('should return true if user email is verified', done => {
//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: true,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: 'Sam',
//             lastName: 'Iam',
//             location: 'AL',
//             dob: '10/10/2020',
//             userName: 'Sam Iam',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(true);
//         done();
//       });
//     });

//     it('should return UrlTree if user email is verified', done => {
//       const expectation = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(expectation);

//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: false,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: 'Sam',
//             lastName: 'Iam',
//             location: 'AL',
//             dob: '10/10/2020',
//             userName: 'Sam Iam',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(expectation);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/user/verify');
//         done();
//       });
//     });

//     it('should return UrlTree if user no name', done => {
//       const expectation = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(expectation);

//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: false,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: '',
//             lastName: 'Iam',
//             location: 'AL',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(expectation);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/user/profile/name');
//         done();
//       });
//     });

//     it('should return UrlTree if user location not populated', done => {
//       const expectation = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(expectation);

//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: false,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: 'Sam',
//             lastName: 'Iam',
//             location: '',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(expectation);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/user/profile/username');
//         done();
//       });
//     });

//     it('should return UrlTree if user dob is not populated', done => {
//       const expectation = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(expectation);

//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: false,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: 'Sam',
//             lastName: 'Iam',
//             location: 'AL',
//             dob: '',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(expectation);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/user/profile/username');
//         done();
//       });
//     });

//     it('should return UrlTree if user userName is not populated', done => {
//       const expectation = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(expectation);

//       mockStore.setState({
//         userState: {
//           user: {
//             emailVerified: false,
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//         profileState: {
//           profile: {
//             firstName: 'Sam',
//             lastName: 'Iam',
//             location: 'AL',
//             dob: '10/10/2020',
//             userName: '',
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(expectation);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/user/profile/username');
//         done();
//       });
//     });
//   });
// });
