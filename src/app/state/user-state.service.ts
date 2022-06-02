import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../shared/models/user.model";
import { StateService } from "./state.service";

interface UserState {
  user: User | null;// | undefined | null;
  authenticationStatus: boolean;
  loaded: boolean;
  rooms: any[]
}

const initialState: UserState = {
  user: null,
  authenticationStatus: false,
  loaded: false,
  rooms: []
};

@Injectable({
  providedIn: 'root'
})
export class UsersStateService extends StateService<UserState>{
  user$: Observable<User | null | undefined> = this.select(state => state.user);

  // selectedUser$: Observable<User | null> = this.select((state) => {
  //   return state.user.find((item) => item.id === state.selectedUserId);
  // });

  constructor() {
    super(initialState);
  }

  setUser(user: Partial<User>) {
    this.setState({ user: { ...this.state.user, user } })
  }

  selectUser(user: User) {
    this.setState({ selectedUserId: user.id });
  }
}


// interface TodoState {
//   todos: Todo[];
//   selectedTodoId: number;
// }

// const initialState: TodoState = {
//   todos: [],
//   selectedTodoId: undefined
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class TodosStateService extends StateService<TodoState>{
//   todos$: Observable<Todo[]> = this.select(state => state.todos);

//   selectedTodo$: Observable<Todo> = this.select((state) => {
//     return state.todos.find((item) => item.id === state.selectedTodoId);
//   });

//   constructor() {
//     super(initialState);
//   }

//   addTodo(todo: Todo) {
//     this.setState({ todos: [...this.state.todos, todo] })
//   }

//   selectTodo(todo: Todo) {
//     this.setState({ selectedTodoId: todo.id });
//   }
// }
