import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';
import {  SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE } from '../../actions/pet-tag.actions';
import { PetTag } from '../../models/pet-tag.model';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.pipe(
      // 对应app.module.ts中的 StoreModule.forRoot({petTag: petTagReducer }) 若以前后台交互的逻辑来说，这句话的意义在于指定reducers, 就指定一个处理函数； 类似于一个网址，而 action 就类似于参数
      select('petTag')
    );
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe(
      // 此处之所以会执行，可能是订阅动作，触发了state的初始化逻辑，导致了state 被初始化，从而此处产生了动作；
      (state) => {
        this.petTag = state as PetTag;
        this.done = !!(this.petTag.shape && this.petTag.text);
      }
    );
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }


  selectShapeHandler(shape: string) {
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
  }

  // tslint:disable-next-line:max-line-length
  //  In a more complex app, you may wish to dispatch actions in an actions creator service that can be injected into your components. 这就类似于我们封装的 http 服务；

  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: SELECT_FONT,
      payload: fontType
    });
  }

  /**
   *
   *
   * @param {string} text
   * @memberof CreateComponent
   */
  addTextHandler(text: string) {
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

  toggleClipHandler() {
    this.store.dispatch({
      type: TOGGLE_CLIP
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: TOGGLE_GEMS
    });
  }

  submit() {
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }


}
