import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../shared/state/app.state";
import {selectUserError, selectUserMessage} from "../../../shared/state/user/user.selectors";

@Component({
  selector: 'app-registration-response',
  templateUrl: './registration-response.component.html',
  styleUrls: ['./registration-response.component.css']
})
export class RegistrationResponseComponent {
  message$: Observable<string>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.pipe(select(selectUserMessage));
    this.error$ = this.store.pipe(select(selectUserError));
  }
}
