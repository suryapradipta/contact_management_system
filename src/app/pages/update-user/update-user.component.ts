import { Component } from '@angular/core';
import {AppState} from "../../shared/state/app.state";
import {Store} from "@ngrx/store";
import * as UserActions from '../../shared/state/user/user.action';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(private store: Store<AppState>) { }
  update(token: string, name: string, password: string) {
    console.log(token)
    console.log(name)
    console.log(password)
    this.store.dispatch(UserActions.updateUser({ token, name, password }));
  }
}
