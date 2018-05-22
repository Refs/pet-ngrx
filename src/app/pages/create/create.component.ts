import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import {  SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE } from '../../actions/pet-tag.actions';
import { PetTag } from '../../models/pet-tag.model';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  tagState$: Observable<PetTag>;


  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
