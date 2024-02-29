import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from "./pages/contact-list/contact-list.component";
import {RegisterUserComponent} from "./pages/register-user/register-user.component";
import {LoginComponent} from "./pages/login/login.component";
import {HeaderComponent} from "./pages/header/header.component";
import {UpdateUserComponent} from "./pages/update-user/update-user.component";

const routes: Routes = [
  {path: '', component: UpdateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'contact-list', component: ContactListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
