import {
  Component,
  ViewEncapsulation,
  Input,
  Output, EventEmitter
} from '@angular/core';
import { MovieModels } from '../../../movie.model';

@Component({
  selector: 'mv-item-movie',
  templateUrl: 'item.movie.component.html',
  styleUrls: ['item.movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemMovieComponent implements Input, Output {
  @Input() movie: MovieModels;
  @Input() numberStars: number[];
  @Output() changeMovie: EventEmitter<any> = new EventEmitter();
  @Output() changeDetail: EventEmitter<any> = new EventEmitter();

  constructor () {
  }

  changeRating (valueType: string, numberValue: number): void {
    this.changeMovie.emit({movie: this.movie, value: valueType, number: numberValue});
  }

  changeLikes (event) {
    event.movie = this.movie;
    this.changeMovie.emit(event);
  }

  clickHeader () {
    this.changeDetail.emit(this.movie.id);
  }
}
