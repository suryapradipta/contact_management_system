import { createAction, props } from '@ngrx/store';

export const registerUser = createAction('[User] Register User', props<{ username: string, name: string, password: string }>());
export const registerUserSuccess = createAction('[User] Register Success', props<{ message: any }>());
export const registerUserFailure = createAction('[User] Register Failure', props<{ error: any }>());
