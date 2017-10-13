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
  movieDescription: MovieModel;
  subscription: Subscription;

  private numberStars: number[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getById(Number(params.get('id'))))
      .subscribe((movie: MovieModel) => this.movieDescription = movie,
        (error) => console.log('Not found page'));

    this.numberStars = this.dataService.numberStars;
    document.documentElement.scrollTop = 0;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  changeRating(value: string, numberType: number): void {
    let data: MovieModel = this.movieDescription;
    let childSubscription: Subscription;

    data[value] = numberType;

    childSubscription = this.dataService.postData(data, data.id).subscribe();

    this.subscription.add(childSubscription);
  }

  changeLikes(event: EventModel): void {
    this.changeRating(event.value, event.number);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
