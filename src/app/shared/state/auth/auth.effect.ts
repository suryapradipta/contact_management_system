import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GraphqlService} from "../../services/graphql.service";
import * as AuthActions from './auth.actions';
import {map, mergeMap, of} from "rxjs";
import {catchError} from "rxjs/operators";

/*
Separation of Concerns: Effects separate side effects from the rest of your application logic,
keeping your reducers pure and focused solely on state manipulation.

Effects provide a convenient way to
 handle asynchronous operations like HTTP requests without blocking the main thread.
* */
@Injectable()
export class AuthEffect {

  constructor(
    private actions$: Actions,
    private authService: GraphqlService
  ) {
  }

  loginUser$ = createEffect(() => this.actions$.pipe(
    // 1. Listen for loginUser action
    // When this action is dispatched, the effect will be triggered.
    ofType(AuthActions.loginUser),

    // each loginUser action is mapped into single stream using mergemap
    mergeMap(({username, password}) => // 2. Perform mergeMap to handle asynchronous operations

      this.authService.loginUser(username, password).pipe(  // 3. Perform async operation (e.g., HTTP request)

        map(response => AuthActions.loginUserSuccess({
            token: response.data.loginUser.token,
            expiredTokenAt: response.data.loginUser.expiredTokenAt
          }), // 4. Dispatch success action

          catchError(error => of(AuthActions.loginUserFailure({error: error.message})))
        )
      ))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logoutUser),
    mergeMap(({token}) =>
      this.authService.logOutUser(token).pipe(
        map(response => AuthActions.logoutUserSuccess({
          message: response.data.logOutUser.message
        })),

        catchError(error => of(
          AuthActions.logoutUserFailure({error: error.message})
        ))
      )
    )
  ))
}
