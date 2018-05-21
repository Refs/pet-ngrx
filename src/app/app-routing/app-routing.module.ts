import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompleteComponent } from '../pages/complete/complete.component';
import { CreateComponent } from '../pages/create/create.component';
import { HomeComponent } from '../pages/home/home.component';


const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'create',  component: CreateComponent },
  { path: 'complete',  component: CompleteComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
