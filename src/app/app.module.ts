import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BackandService } from 'angular2bknd-sdk';

import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    UserAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BackandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
