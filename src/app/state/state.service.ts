import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { User } from '../shared/models/user.model';


interface UserState extends User {
  user: User | null;// | undefined | null;
  loaded: boolean;
  rooms: any[]
}


interface AppState {
  user: UserState | null;
  authenticationStatus: boolean;
  loaded: boolean;
  rooms: any[]
}



const initialState: AppState = {
  user: null,
  authenticationStatus: false,
  loaded: false,
  rooms: []
};

@Injectable()
export class StateService {
  // private initialState = initialState;
  private state$: BehaviorSubject<AppState>;
  protected get state(): AppState {
    return this.state$.getValue();
  }

  constructor() {
    this.state$ = new BehaviorSubject<AppState>(initialState);
  }

  public select(mapFn: (state: AppState) => Partial<AppState>): Observable<Partial<AppState>> {
    return this.state$.asObservable().pipe(
      map((state: AppState) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  public setState(newState: Partial<AppState>) {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }

  public init(initialState: Partial<AppState>) {

  }
}