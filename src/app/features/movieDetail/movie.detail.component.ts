import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core';
import { EventModel, MovieModel } from '../../shared/interfase.models';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: 'movie.detail.component.html',
  styleUrls: ['movie.detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  subscription: Subscription[] = [];
  numberStars: number[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.subscription.push(this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getById(Number(params.get('id'))))
      .subscribe((movie: MovieModel) => this.movie = movie,
        (error) => console.log('Not found page')));

    this.numberStars = this.dataService.numberStars;
  }

  changeMovie(valueType: string, numberValue: number): void {
    this.movie[valueType] = numberValue;

    this.subscription.push(this.dataService.postData(this.movie, this.movie.id).subscribe());
  }

  changeLikes(event: EventModel): void {
    this.changeMovie(event.value, event.number);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((item) => {
      item.unsubscribe();
    });
  };
}
