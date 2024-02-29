import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.action';
import {GraphqlService} from "../../services/graphql.service";


@Injectable()
export class UserEffects {

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.registerUser),
    mergeMap(({ username, name, password }) =>
      this.userService.registerUser(username, name, password).pipe(
        map((response) => {
          if (response.data.registerUser.success) {
            return UserActions.registerUserSuccess({ message: response.data.registerUser.message });
          } else {
            return UserActions.registerUserFailure({ error: response.data.registerUser.message });
          }
        }),
        catchError(error => of(UserActions.registerUserFailure({ error: error.message })))
      )
    )
  ));

  updateUser$ =  createEffect(() => this.actions$.pipe(
    ofType(UserActions.updateUser),
    mergeMap(({token, name, password}) =>
      this.userService.updateUser(token, name, password).pipe(
        map((response) => UserActions.updateUserSuccess({
          message: response.data.updateUser.message
        })),
        catchError(error => of(UserActions.updateUserFailure({error: error.message})))
      )
    )
  ))


  constructor(
    private actions$: Actions,
    private userService: GraphqlService
  ) {}
}
