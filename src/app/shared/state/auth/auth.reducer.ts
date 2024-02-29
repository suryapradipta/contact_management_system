import {createReducer, on} from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import {state} from "@angular/animations";


/*
Reducers are pure functions responsible for handle state transitions in response to dispatched actions.
They define how the state should change based on the action type and payload.
Reducers are pure functions, meaning they don't have side effects and always produce the same output for a given input.

In NgRx, reducers take the current state and an action as input and return a new state based on the action.
They should not modify the existing state but return a new state object.
* */
export interface AuthState {
  token: string ;
  expiredTokenAt: string;
  error: string;
  loading: boolean;
}

const initialState: AuthState = {
  token: '',
  expiredTokenAt: '',
  error: '',
  loading: false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.loginUser, state => ({
    ...state,
    loading: true,
    error: ''
  })),

  // defines a reducer function for loginUserSuccess
  // When this action is dispatched, this function is called to update the state.
  on(AuthActions.loginUserSuccess,
    // takes the current state and action payload as arguments and returns a new state object.
    (state, {token, expiredTokenAt}) => ({

      //This spreads the current state and updates the token,
      // expiredTokenAt properties with the values from the action payload.
      ...state,
      token,
      expiredTokenAt,
      loading: false,
      error: ''
    })),

  on(AuthActions.loginUserFailure, (state, {error}) => ({
    ...state,
    token: '',
    expiredTokenAt: '',
    loading: false,
    error
  })),



  on(AuthActions.logoutUser, state => ({
    ...state,
    loading: true,
    error: ''
  })),

  on(AuthActions.logoutUserSuccess, (state, { message }) => ({
    ...state,
    token: '',
    expiredTokenAt: '',
    loading: false,
    error: ''
  })),

  on(AuthActions.logoutUserFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false,
  }))
)
