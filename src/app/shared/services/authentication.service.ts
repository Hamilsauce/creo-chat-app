import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, Subject, firstValueFrom, map, tap } from 'rxjs';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthenticationService {
  private userSubject: Subject<User> = new BehaviorSubject<User>({
    username: '',
    password: '',
    email: ''
  });
  user$: Observable<User> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }


  putRegisteredUser(user: User): Observable<any> {

    console.log(user);

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.warn(this.http.put('http://localhost:4100/users', { body: user, headers }));

    return this.http.put('http://localhost:4100/users', { body: user, headers })
      .pipe(tap(_ => console.warn('HEARD IN AUTH SERVICE!', { _ }))


      )



  }

  async getRegisteredUser(email: string): Promise<void> {
    this.userSubject.next(await firstValueFrom(this.http.get<User>(`${ environment.registrationUri }/${ email }`)))
  }

  logout() {
    localStorage.removeItem('currentUser');

  }

}
