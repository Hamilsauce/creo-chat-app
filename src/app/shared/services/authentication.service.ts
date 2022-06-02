import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from '../models/user.model';
import { PostUserHttpResponse } from '../models/http.model';


export interface UserCredentials {
  email: string;
  password: string;
  username?: string;
}

@Injectable()
export class AuthenticationService {
  // private userSubject: Subject<User> = new BehaviorSubject<User>({
  //   username: '',
  //   password: '',
  //   email: ''
  // });

  // user$: Observable<User> = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  registerUser(user: UserCredentials): Observable<PostUserHttpResponse> {

    return this.http.post<PostUserHttpResponse>(`${ environment.apiUrl }/users`, user, { observe: 'response' as 'body', responseType: 'json' })
      .pipe(
        tap(_ => console.warn('RESPONSE FROM PUT! base response', _)),
      )
  }

  authenticateUser(user: UserCredentials): Observable<PostUserHttpResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        responseType: 'json',
        observe: 'response',

      })
    };
    return this.http.post<PostUserHttpResponse>(`${ environment.apiUrl }/login`, user, { observe: 'response' as 'body', responseType: 'json' })
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
