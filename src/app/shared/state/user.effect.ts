import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.action';
import {GraphqlService} from "../services/graphql.service";
@Injectable()
export class UserEffects {

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.registerUser),
    switchMap(({ username, name, password }) =>
      this.userService.registerUser(username, name, password).pipe(
        map(user => {
          if (user) {
            return UserActions.registerUserSuccess({ user });
          } else {
            // Handle error scenario, if registration failed
            return UserActions.registerUserFailure({ error: 'Registration failed' });
          }
        }),
        catchError(error => of(UserActions.registerUserFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private userService: GraphqlService
  ) {}
}
