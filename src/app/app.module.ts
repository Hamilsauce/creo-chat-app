import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { UserLoginComponent } from './user/user-login/user-login.component';
// import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { UserService } from './user/services/user.service';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { DasboardViewComponent } from './user/views/dashboard/dasboard-view.component';
import { UserLoginComponent } from './user/views/user-login/user-login.component';
import { View404Component } from './shared/view404/view404.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AppComponent,
    DasboardViewComponent,
    View404Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCommonModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AppRoutingModule, AuthenticationService, UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
