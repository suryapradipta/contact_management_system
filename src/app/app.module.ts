import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './shared/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import {FormsModule} from "@angular/forms";
import {userReducer} from "./shared/state/user/user.reducer";
import {UserEffects} from "./shared/state/user/user.effect";
import { RegistrationResponseComponent } from './pages/register-user/registration-response/registration-response.component';
import { LoginComponent } from './pages/login/login.component';
import {authReducer} from "./shared/state/auth/auth.reducer";
import {AuthEffect} from "./shared/state/auth/auth.effect";
import { AuthFeedbackComponent } from './pages/login/auth-feedback/auth-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    RegisterUserComponent,
    RegistrationResponseComponent,
    LoginComponent,
    AuthFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: userReducer,
      auth: authReducer
    }, {}),
    EffectsModule.forRoot([
      UserEffects,
      AuthEffect
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
