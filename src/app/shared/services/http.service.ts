import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  private baseApiUrl = 'http://localhost:4200/';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.baseApiUrl);
  }
}
