import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/state/app.state";
import * as AuthActions from "../../shared/state/auth/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>) {
  }

  onSubmit(): void {
    this.store.dispatch(AuthActions.loginUser({username: this.username, password: this.password}));
  }
}
