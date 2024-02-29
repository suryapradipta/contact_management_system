import {createReducer, on} from "@ngrx/store";
import * as UserActions from './user.action';
import {User} from "../../models/user.model";

export interface UserState {
  message: string;
  error: string;
  loading: boolean;
}
const initialState: UserState = {
  message: '',
  error: '',
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.registerUser, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  on(UserActions.registerUserSuccess, (state, { message }) => ({
    ...state,
    message,
    error: ''
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    message: '',
    error
  })),


  on(UserActions.updateUser, state => ({
    ...state,
    loading: true,
    error: ''
  })),
  on(UserActions.updateUserSuccess, (state, { message }) => ({
    ...state,
    message,
    loading: false,
    error: ''
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    message: '',
    error
  })),
);
