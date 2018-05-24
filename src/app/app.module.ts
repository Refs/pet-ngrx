import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing/app-routing.module';

import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './reducers/pet-tag.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';




import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';
import { TagExtrasComponent } from './pages/create/tag-extras/tag-extras.component';
import { TagPreviewComponent } from './pages/tag-preview/tag-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent,
    TagExtrasComponent,
    TagPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      petTag: petTagReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
