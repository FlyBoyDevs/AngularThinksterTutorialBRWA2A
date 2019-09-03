import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    /*Shared Modules declares and exports these components by importing Shared module I can use them
    // directly
    // FooterComponent,
    // HeaderComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
