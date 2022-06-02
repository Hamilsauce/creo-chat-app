import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { View404Component } from './shared/view404/view404.component';
// import { AppRoutes } from './shared/routes/app.routes';
import { DasboardViewComponent } from './user/views/dashboard/dasboard-view.component';
import { UserLoginComponent } from './user/views/user-login/user-login.component';
// import { UserLoginComponent } from '/user/user-login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: DasboardViewComponent },
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
