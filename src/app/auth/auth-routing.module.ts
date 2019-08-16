import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth.component";

// const routes: Routes = [
//   {
//     path: 'login',
//     component: AuthComponent
//   },
//   {
//     path: 'register',
//     component: AuthComponent
//   }
// ];

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [authRouting],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
