import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { PetTag } from '../../models/pet-tag.model';


@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent implements OnInit, OnChanges {

  @Input() petTag: PetTag;

  imgSrc = '';

  tagClipText: string;

  gemsText: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // 路径应该都是相对于 index.html 来说明的；
    // ngOnChanges() 是先于 constructor 执行的，因为constructor 可能会去依赖输入属性；
    this.imgSrc = `./assets/images/${this.petTag.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }

  private boolToText(bool: boolean) {
    return bool ? 'yes' : 'no';
  }

}
