import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserMessage = createSelector(
  selectUserState,
  (state: UserState) => state.message
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
