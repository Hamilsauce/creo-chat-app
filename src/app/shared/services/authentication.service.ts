import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, Subject, firstValueFrom, map, tap, mergeMap } from 'rxjs';
import { User } from '../models/user.model';


export type UserRegistrationHttpStatusText = 'Created' | 'User Not Created'

export interface PostUserHttpResponse extends Observable<PostUserHttpResponse> {
  location: string;
  headers: HttpHeaders;
  status: HttpStatusCode;
  statusText: UserRegistrationHttpStatusText;
  // textfile: string;
  // date: any;
}


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


  registerUser(user: User): Observable<PostUserHttpResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        responseType: 'json',
        observe: 'response'
      })
    };

    return this.http.post<PostUserHttpResponse>(`${ environment.apiUrl }/users`, user, { observe: 'response' as 'body', responseType: 'json' })
      .pipe(
        tap(_ => console.warn('RESPONSE FROM PUT! base response', _)),
        tap(_ => console.warn('RESPONSE FROM PUT! base status', _.status)),
        tap(_ => console.warn('RESPONSE FROM PUT! headers.get', _.headers.get('location')))
      )

  }

  authenticateUser(user: User): Observable<PostUserHttpResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        responseType: 'json',
        observe: 'response',

      })
    };
    // return this.http.get<PostUserHttpResponse>(`${ environment.apiUrl }/login`, httpOptions)
    return this.http.post<PostUserHttpResponse>(`${ environment.apiUrl }/login`, user, { observe: 'response' as 'body', responseType: 'json' })

    // this.userSubject.next(await firstValueFrom(this.http.get<User>(`${ environment.apiUrl }/${ email }`)))
  }

  logout() {
    localStorage.removeItem('currentUser');

  }

}
