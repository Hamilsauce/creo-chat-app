
// import { UserAuthGuard } from './user-auth.guard';

// describe('UserAuthGuard', () => {
//   let guard: UserAuthGuard;
//   let routerSpy: jasmine.SpyObj<Router>;
//   let mockStore: MockStore;
//   let mockInvestorProfileService: jasmine.SpyObj<InvestorProfileService>;

//   beforeEach(() => {
//     routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
//     mockInvestorProfileService = jasmine.createSpyObj('InvestorProfileService', [
//       'isWhiteListedEmail',
//     ]);

//     TestBed.configureTestingModule({
//       providers: [
//         UserAuthGuard,
//         {
//           provide: Router,
//           useValue: routerSpy,
//         },
//         {
//           provide: InvestorProfileService,
//           useValue: mockInvestorProfileService,
//         },
//         provideMockStore(),
//       ],
//     });

//     mockInvestorProfileService.isWhiteListedEmail.and.returnValue(of(true));
//     guard = TestBed.inject(UserAuthGuard);
//     mockStore = TestBed.inject(MockStore);
//   });

//   describe('canActivate', () => {
//     it('should return true when activating with user', done => {
//       mockStore.setState({
//         userState: {
//           user: {
//             email: 'mock@user.com',
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(true);
//         done();
//       });
//     });

//     it('should return false when activating with user not whitelisted', done => {
//       mockInvestorProfileService.isWhiteListedEmail.and.returnValue(of(false));

//       mockStore.setState({
//         userState: {
//           user: {
//             email: 'mock@user.com',
//             authenticationStatus: UserAuthenticationStatus.authenticated,
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(false);
//         done();
//       });
//     });

//     it('should return UrlTree when activating with no user', done => {
//       const mockUrlTree = jasmine.createSpyObj('UrlTree', ['']);
//       routerSpy.parseUrl.and.returnValue(mockUrlTree);

//       mockStore.setState({
//         userState: {
//           user: {
//             email: 'mock@user.com',
//             authenticationStatus: UserAuthenticationStatus.unauthenticated,
//           },
//         },
//       });

//       const observable = guard.canActivate();

//       observable.subscribe(result => {
//         expect(result).toEqual(mockUrlTree);
//         expect(routerSpy.parseUrl).toHaveBeenCalledWith('/start');
//         done();
//       });
//     });
//   });
// });
