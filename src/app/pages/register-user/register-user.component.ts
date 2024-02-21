import { Component } from '@angular/core';
import {RegisterUserRequest} from "../../shared/models/register-user-request.model";
import {Store} from "@ngrx/store";
import * as UserActions from '../../shared/state/user.action';
import {AppState} from "../../shared/state/app.state";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  username: string = '';
  name: string = '';
  password: string = '';

  constructor(private store: Store<AppState>) { }

  onSubmit(): void {
    console.log('Register button clicked');
    console.log(this.username)
    console.log(this.name)
    console.log(this.password)
    this.store.dispatch(UserActions.registerUser({ username: this.username, name: this.name, password: this.password }));
  }
}