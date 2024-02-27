import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from "./pages/contact-list/contact-list.component";

const routes: Routes = [
  { path: '', component: ContactListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
