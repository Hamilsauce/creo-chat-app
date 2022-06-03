import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { View404Component } from './shared/view404/view404.component';
import { DashboardViewComponent } from './user/views/dashboard/dashboard-view.component';
import { UserLoginComponent } from './user/views/user-login/user-login.component';
// import { UserLoginComponent } from '/user/user-login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: ChatComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: View404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'enabled',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
