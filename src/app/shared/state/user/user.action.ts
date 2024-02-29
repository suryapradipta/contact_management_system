import {createAction, props} from '@ngrx/store';

export const registerUser = createAction('[User] Register User', props<{
  username: string,
  name: string,
  password: string
}>());
export const registerUserSuccess = createAction('[User] Register Success', props<{ message: any }>());
export const registerUserFailure = createAction('[User] Register Failure', props<{ error: any }>());


export const updateUser = createAction(
  '[User] Update User',
  props<{ token: string, name: string, password: string }>()
)
export const updateUserSuccess = createAction(
  '[User] Update Success',
  props<{ message: string }>()
);
export const updateUserFailure = createAction(
  '[User] Update Failure',
  props<{ error: string }>()
);
