import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientXsrfModule } from '../../node_modules/@angular/common/http';
import { ContentListComponent } from './content-list/content-list.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

@NgModule({
  declarations: [ 
    ContentListComponent,
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    ContentDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'X_CSRF_Token',
      headerName: 'X-CSRF-Token'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
