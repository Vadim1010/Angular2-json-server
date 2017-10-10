import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core';
import { MovieModels } from '../movie.model';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: 'movie.detail.component.html',
  styleUrls: ['movie.detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private numberStars: number[];
  private movieDescription: MovieModels;
  private subscriptions: Subscription[] = [];

  constructor (private route: ActivatedRoute,
               private router: Router,
               private dataService: DataService) {
  }

  ngOnInit (): void {
    this.subscriptions.push(this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getById(+params.get('id')))
      .subscribe((movie: MovieModels) => this.movieDescription = movie,
        (error) => console.log('Not found page')));

    this.numberStars = this.dataService.numberStars;
    document.documentElement.scrollTop = 0;
  }

  goHome (): void {
    this.router.navigate(['/']);
  }

  changeRating (value: string, numberType: number): void {
    let data = this.movieDescription;
    data[value] = numberType;

    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  changeLikes (event): void {
    let data = this.movieDescription;
    data[event.value] = event.number;
    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  ngOnDestroy (): void {
    this.subscriptions.forEach((item) => {
      item.unsubscribe();
    });
  }
}
