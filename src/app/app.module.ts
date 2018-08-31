import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { UserformComponent } from './components/userform/userform.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DistrictComponent} from './components/district/district.component';


@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    UserformComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
