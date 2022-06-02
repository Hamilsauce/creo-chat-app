import { Observable, BehaviorSubject,Subscription, firstValueFrom } from "rxjs";
import { catchError, tap,map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { User } from "../shared/models/user.model";
import { deepCopy } from "../shared/utils/clone.function";
import { UserService } from "../user/services/user.service";





export class Store<T> {
  readonly state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  protected get state(): T {
    return this._state$.getValue();
  }

  protected setState(nextState: T): void {
    this._state$.next(nextState);
  }
}


export class UserState {
  users: User[] = [];
  user: User | undefined;
  searchResult: User[] =[];
}


@Injectable()
export class UserStore extends Store<UserState> {
  public readonly users$ = this.state$.pipe(map((x) => x.users));

  public readonly user$ = this.state$.pipe(map((x) => x.user));

  public readonly searchResult$ = this.state$.pipe(map(x=> x.searchResult));

  constructor(private userService: UserService) {
    super(new UserState());
  }

  // public async loadAll() {
  //   const users = await this.userService.loadAll();
  //   this.setState({
  //     ...this.state,
  //     users: users,
  //   });
  // }

  async getUser(id: number) {
    const user = await this.userService.getUser(id);
    this.setState({
      ...this.state,
      user: user,
    });
  }

  public async updateUser(user: User, savedUser: (resp: User) => void) {
    (await this.userService.save(user)).subscribe(async (response: any) => {
      this.setState({
        ...this.state,
        user: user,
      });
      savedUser(user);
    });

  }

  public async add(user: User) {
    return (await this.userService.add(user)).subscribe((response: any) => {
      this.setState({
        ...this.state,
        users: [...this.state.users, response],
      });
    });
  }

  // public async delete(user: User) {
  //   return (await this.userService.delete(user)).subscribe((response: any) => {
  //     const tobeDeletedIndex = this.state.users.findIndex((element) => {
  //       return element.id === user.id;
  //     });
  //     if (!response) {
  //       const currentUseres = deepCopy(this.state.users);
  //       currentUseres.splice(tobeDeletedIndex, 1);
  //       this.setState({ ...this.state, users: currentUseres });
  //     }
  //   });
  // }

  public async searchUseres(term: string){
    const users = await this.userService.search(term);
    this.setState({
      ...this.state,
      searchResult: users,
    });
  }
}

