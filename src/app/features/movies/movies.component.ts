import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { DataService } from '../../core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventModel, MovieModel } from '../../shared/interfase.models';

@Component({
  selector: 'mv-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MoviesComponent implements OnInit, OnDestroy {
  @Input() movies: MovieModel[];
  numberStars: number[];

  subscriptions: Subscription[] = [];

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.numberStars = this.dataService.numberStars;

    this.subscriptions.push(this.dataService.getAll().subscribe(
      (result: MovieModel[]) => {
        this.movies = result;
      }));
  }

  sorting(value: string): void {
    this.subscriptions.push(this.dataService.sorting(value).subscribe(
      (result: MovieModel[]) => {
        this.movies = result;
      }));
  }

  changeMovie(event: EventModel): void {
    let data: MovieModel = event.itemMovie;

    data[event.value] = event.number;

    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  searchs(value: string): void {
    this.subscriptions.push(this.dataService.filter(value).subscribe(
      (result: MovieModel[]) => {
        this.movies = result;
      }));
  }

  detailsMovie(id: number): void {
    this.router.navigate(['/movie/' + id]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => {
      item.unsubscribe();
    });
  }
}
