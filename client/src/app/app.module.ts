import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';

@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    HomeComponent,
    CreateComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
