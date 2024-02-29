import {createReducer, on} from "@ngrx/store";
import * as UserActions from './user.action';
import {User} from "../../models/user.model";

export interface UserState {
  message: string;
  error: string;
}
const initialState: UserState = {
  message: '',
  error: ''
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.registerUserSuccess, (state, { message }) => ({
    ...state,
    message,
    error: ''
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    message: '',
    error
  }))
);
