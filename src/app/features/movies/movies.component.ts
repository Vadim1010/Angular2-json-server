import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import {DataService} from '../../core';
import {MovieModels} from '../movie.model'
import {Router} from '@angular/router';
import {Subject} from "rxjs";

@Component({
  selector: 'mv-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MoviesComponent implements OnInit, OnDestroy {
  @Input() items: MovieModels[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public itemDescription;
  public numberStars: number[];

  constructor(private dataService: DataService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.numberStars = this.dataService.numberStars;
    this.dataService.getAll().subscribe(
      (result) => {
        this.items = result;
        this.itemDescription = result[0];
      });
  }

  public sorting(value: string): void {
    this.dataService.sorting(value).subscribe(
      (result) => {
        this.items = result;
      });
  }

  changeMovie(event) {
    let data = event.movie;
    data[event.value] = event.number;

    this.dataService.postData(data, data.id).subscribe();
  }

  public searchs(e): void {
    const value: string = e.target.value;

    this.dataService.filter(value).subscribe(
      (result) => {
        this.items = result;
      });
  }

  public detailsMovie(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
