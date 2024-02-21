import {createReducer, on} from "@ngrx/store";
import * as UserActions from './user.action';
import {User} from "../models/user.model";

export interface UserState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.registerUser, state => ({ ...state, loading: true, error: null })),
  on(UserActions.registerUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(UserActions.registerUserFailure, (state, { error }) => ({ ...state, loading: false, error }))
);


