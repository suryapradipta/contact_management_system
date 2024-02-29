import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../shared/state/app.state";
import {selectAuthError, selectAuthLoading, selectAuthToken} from "../../shared/state/auth/auth.selector";
import {Observable} from "rxjs";
import * as AuthActions from "../../shared/state/auth/auth.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  token$: Observable<string>;
  token: string;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.token$ = this.store.pipe(select(selectAuthToken));
    this.token$.subscribe(token => {
      this.token = token;
      console.log(this.token);
    })
  }

  logOut(): void {
    this.store.select(selectAuthToken).subscribe(token => {
      if(token) {

        this.store.dispatch(AuthActions.logoutUser({token}));
        this.router.navigate(['/']);
      } else {
      console.log("please login")
      }
    })
  }
}
