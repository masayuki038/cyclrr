import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ContentListComponent } from './content-list/content-list.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [ 
    ContentListComponent,
    AppComponent,
    MessagesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
