import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtviseComponent } from './artvise/artvise.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthService } from './services/auth.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ArtviseComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Http
  ],
  providers: [
    Http,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
