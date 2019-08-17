import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {Errors} from "./models/errors.model";
import {User} from "./models/user.model";
import { ListErrorsComponent } from './components/list-errors/list-errors.component';


/*By Importing SharedModule in other modules we automatically include the exported components for reuse
* and would not need to import again in the other modules*/
@NgModule({
  declarations: [HeaderComponent, FooterComponent, ListErrorsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ListErrorsComponent
  ],
  providers: [
    ApiService,
    UserService
  ]
  /*Shared Module we provide this shared service, might reconsider at a later point
  butt at this stage it seems cleaner*/
})
export class SharedModule { }
