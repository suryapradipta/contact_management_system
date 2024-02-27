import { createAction, props } from '@ngrx/store';
import {RegisterUserRequest} from "../models/register-user-request.model";
import {User} from "../models/user.model";

// export const registerUser = createAction('[User] Register User', props<{ request: RegisterUserRequest }>());
// export const registerUserSuccess = createAction('[User] Register User Success');
// export const registerUserFailure = createAction('[User] Register User Failure', props<{ error: any }>());

export const registerUser = createAction('[User] Register User', props<{ username: string, name: string, password: string }>());
export const registerUserSuccess = createAction('[User] Register User Success', props<{ user: User }>());
export const registerUserFailure = createAction('[User] Register User Failure', props<{ error: any }>());
