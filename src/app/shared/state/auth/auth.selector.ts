import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducer";

/*
Selectors encapsulate the logic for accessing state properties.
Instead of accessing the state directly from components, services, or effects, you can use selectors,
which centralize this logic in one place.

They improve performance by memoizing the results.

They help in decoupling components from the internal structure of the state,
making it easier to maintain and evolve your application.

* */


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);
