import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//IMPORTS

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
      apiKey: "AIzaSyBQpo1-XXUaxbkWHFrVRf_GYvXl8uPGCG0",
      authDomain: "crowd-control-bd4b8.firebaseapp.com",
      databaseURL: "https://crowd-control-bd4b8.firebaseio.com",
      projectId: "crowd-control-bd4b8",
      storageBucket: "crowd-control-bd4b8.appspot.com",
      messagingSenderId: "678842753301"
    };

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
