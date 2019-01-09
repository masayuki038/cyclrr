import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [{
    path: 'contents',
    component: ContentListComponent
  }, { 
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'detail/:id',
    component: ContentDetailComponent
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
