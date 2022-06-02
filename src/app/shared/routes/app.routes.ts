
import { DasboardViewComponent } from 'src/app/user/views/dashboard/dasboard-view.component';
import { UserLoginComponent } from 'src/app/user/views/user-login/user-login.component';
import { UserAuthGuard } from './user-auth.guard';

export const AppRoutes = [
  {
    path: '',
    component: UserLoginComponent,
    // canActivate:,
    children: [
      {
        canActivate:  [UserAuthGuard],
        path: 'dashboard',
        component: DasboardViewComponent,
      },
      // {
      //   path: 'deposit',
      //   component: DepositFundsViewComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      //   children: [
      //     {
      //       path: 'payment',
      //       component: DepositFundsPaymentComponent,
      //     },
      //     {
      //       path: 'confirmation',
      //       component: DepositFundsConfirmationComponent,
      //     },
      //     {
      //       path: '',
      //       redirectTo: 'payment',
      //       pathMatch: 'full',
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'payment',
      //     },
      //   ],
      // },
      // {
      //   path: 'trade/:playerId/:orderType',
      //   component: TradeViewComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      //   children: [
      //     {
      //       path: 'buy',
      //       component: TradeBuyComponent,
      //     },
      //     {
      //       path: 'sell',
      //       component: TradeSellComponent,
      //     },
      //     {
      //       path: 'success/:orderId',
      //       component: OrderSuccessComponent,
      //     },
      //     {
      //       path: '',
      //       redirectTo: 'investor/portfolio',
      //       pathMatch: 'full',
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'success',
      //     },
      //   ],
      // },
      // {
      //   path: 'transaction-history',
      //   component: TransactionHistoryViewComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      // },
      // {
      //   path: 'transactions/transfer/:transactionId',
      //   component: TransactionDetailTransferComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      // },
      // {
      //   path: 'transactions/order/:transactionId',
      //   component: TransactionDetailOrderComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      // },
      // {
      //   path: 'notification-history',
      //   component: NotificationHistoryViewComponent,
      //   canActivate: [SubscriptionVerifiedGuard],
      // },
    ],
  },
];
