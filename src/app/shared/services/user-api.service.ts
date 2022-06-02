import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, catchError } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserApiService {
  private useresUrl = "/api/useres";

  constructor(private http: HttpClient) {}

  async loadAll() {
    const res = await firstValueFrom(this.http.get<any>(this.useresUrl)
    .pipe(
      catchError(this.handleError)
    ));
    return res as User[];
  }

  async getUser(id: number){
    const url = `${this.useresUrl}/${id}`;
    return firstValueFrom(this.http.get<User>(url).pipe(
      catchError(this.handleError)
    ));
  }

  async add(user: User) {
    return await firstValueFrom(this.http.post<any>(`${this.useresUrl}`, user).pipe(
      catchError(this.handleError)
    ));
  }
  async save(user: User) {
    return await firstValueFrom(this.http.put<any>(`${this.useresUrl}`, user).pipe(
      catchError(this.handleError)
    ));
  }

  async delete(user:User){
    return await firstValueFrom(this.http.delete<User>(`${this.useresUrl}/${user.id}`));
  }

  async search(term: string){
    return firstValueFrom(this.http.get<User[]>(`${this.useresUrl}/?name=${term}`).pipe(
      catchError(this.handleError)
    ));
  }

  private handleError(error: HttpErrorResponse): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}