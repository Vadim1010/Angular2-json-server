import {
  Component,
  ViewEncapsulation,
  Input,
  Output, EventEmitter
} from '@angular/core';
import { EventModel, MovieModel } from '../../../shared/interfase.models';

@Component({
  selector: 'mv-item-movie',
  templateUrl: 'item.movie.component.html',
  styleUrls: ['item.movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemMovieComponent implements Input, Output {
  @Input() movie: MovieModel;
  @Input() numberStars: number[];
  @Output() changeMovie: EventEmitter<EventModel> = new EventEmitter();
  @Output() changeDetail: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  changeRating(valueType: string, numberValue: number): void {
    this.changeMovie.emit({itemMovie: this.movie, value: valueType, number: numberValue});
  }

  changeLikes(event: EventModel): void {
    this.changeRating(event.value, event.number);
  }

  clickHeader(idValue: number): void {
    this.changeDetail.emit(idValue);
  }
}
