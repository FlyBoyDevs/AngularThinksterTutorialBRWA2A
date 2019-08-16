import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  /*login and register are registered routings inside AuthModule/AuthRouting*/
  // {path: 'login', component: AuthComponent},
  // {path: 'register', component: AuthComponent},

];
const config: ExtraOptions = { useHash: false };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
