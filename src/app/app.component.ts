import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from './shared/services/authentication.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  public title = 'Remote Message Sending Receiving Consumer Software Module';
  private registrationForm = 'Remote Message Sending Receiving Consumer Software Module';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm: FormGroup
  constructor(private authService: AuthenticationService) {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(0, [Validators.required]),
        password: new FormControl(0, [Validators.required]),
      },
      [],
      []
    );
  }



  onRegistrationSubmit({ controls }: FormGroup) {
    // console.log({ form });
    const { email, password } = controls;
    this.authService.putRegisteredUser({ username: 'newuser1', email: email.value, password: password.value })

  }

}
