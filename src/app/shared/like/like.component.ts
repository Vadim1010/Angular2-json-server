import {
  Component,
  Input, Output, ViewEncapsulation, EventEmitter
} from '@angular/core';

@Component({
  selector: 'mv-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class LikeComponent implements Input, Output {
  @Input() likes: number;
  @Output() clickLike: EventEmitter<any> = new EventEmitter();

  constructor () {
  }

  changeRating (valueType: string, numberValue: number): void {
    this.clickLike.emit({value: valueType, number: numberValue});
  }
}
