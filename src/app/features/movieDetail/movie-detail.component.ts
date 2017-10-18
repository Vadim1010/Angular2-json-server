import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { MoviesResourceService } from '../../core';
import { EventModel, MovieModel } from '../../shared/interface.models';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: MovieModel;
  subscription: Subscription;
  numberStars: number[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private moviesResourceService: MoviesResourceService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .switchMap((params: ParamMap) => this.moviesResourceService.getById(Number(params.get('id'))))
      .subscribe((movie: MovieModel) => this.movie = movie,
        (error) => this.router.navigate(['/404']));

    this.numberStars = this.moviesResourceService.numberStars;
  }

  changeMovie(valueType: string, numberValue: number): void {
    this.movie[valueType] = numberValue;

    this.subscription.add(this.moviesResourceService.postData(this.movie, this.movie.id)
      .subscribe());
  }

  changeLikes(event: EventModel): void {
    this.changeMovie(event.value, event.number);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}
