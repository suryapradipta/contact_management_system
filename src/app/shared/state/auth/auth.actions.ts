import {createAction, props} from "@ngrx/store";

/*
*
Immutable Events: Actions represent immutable events or user interactions in your application.

Trigger State Changes: They trigger state changes in the NgRx store, allowing reducers to respond and update the state accordingly.

Payloads for Additional Data: Actions can carry payload data, providing additional information about the event.
* */
export const loginUser = createAction(
  '[Auth] Login User',
  props<{ username: string, password: string }>()
);

export const loginUserSuccess = createAction(
  '[Auth] Login User Success',
  props<{ token: string, expiredTokenAt: string }>()
);

export const loginUserFailure = createAction(
  '[Auth] Login User Failure',
  props<{ error: string }>()
);

export const logoutUser = createAction(
  '[Auth] Logout User',
  props<{ token: string }>()
);

export const logoutUserSuccess = createAction(
  '[Auth] Logout User Success',
  props<{ message: string }>()
);

export const logoutUserFailure = createAction(
  '[Auth] Logout User Failure',
  props<{ error: string }>()
);
