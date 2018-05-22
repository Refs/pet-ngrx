import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './reducers/pet-tag.reducer';



import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      petTag: petTagReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
