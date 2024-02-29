import {UserState} from "./user/user.reducer";
import {AuthState} from "./auth/auth.reducer";

export interface AppState {
  user: UserState;
  auth: AuthState;
}
