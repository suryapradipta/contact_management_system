import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./pages/contact-list/contact-list.component";
import {RegisterUserComponent} from "./pages/register-user/register-user.component";

const routes: Routes = [
  { path: '', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
