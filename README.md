# ngrx learn

> 历史文档 
 
* angular 5  : http://devdocs.io/
* rxjs 5 : https://github.com/ReactiveX/rxjs/tree/stable/doc

## bug1: Property Payload does not exist on type

> https://github.com/ngrx/platform/issues/31

```js
// you can create your CustomAction

export interface CustomAction extends Action {
type: string;
payload?: any;
}

// and then reuse it
```


```js
import { Action } from '@ngrx/store';

export class MyState {
  fieldOne: string,
  fieldTwo: string
}

export class MyStateAction implements Action {
  type: string;
  fieldOne: string;
  fieldTwo: int;
}

export function myReducer(state: MyState, action: MyStateAction) {
  switch(action.type) {
    case 'something':
      return Object.assign({fieldOne: action.fieldOne, fieldTwo: action.fieldTwo})
  }
}

```
