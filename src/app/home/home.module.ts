import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../shared/layout/footer/footer.component";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    homeRouting
  ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }
