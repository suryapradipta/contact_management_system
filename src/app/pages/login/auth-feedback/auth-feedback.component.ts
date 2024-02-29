import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../shared/state/app.state";
import {selectAuthError, selectAuthLoading, selectAuthToken} from "../../../shared/state/auth/auth.selector";

@Component({
  selector: 'app-auth-feedback',
  templateUrl: './auth-feedback.component.html',
  styleUrls: ['./auth-feedback.component.css']
})
export class AuthFeedbackComponent {
  token$: Observable<string>;
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.token$ = this.store.pipe(select(selectAuthToken));
    this.error$ = this.store.pipe(select(selectAuthError));
    this.loading$ = this.store.pipe(select(selectAuthLoading));
  }
}
