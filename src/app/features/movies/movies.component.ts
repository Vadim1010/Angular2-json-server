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
import {Subscription} from "rxjs";

@Component({
  selector: 'mv-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MoviesComponent implements OnInit, OnDestroy {
  @Input() items: MovieModels[];
  private subscriptions: Subscription[] = [];

  numberStars: number[];

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.numberStars = this.dataService.numberStars;

    this.subscriptions.push(this.dataService.getAll().subscribe(
      (result) => {
        this.items = result;
      }));
  }

  sorting(value: string): void {
    this.subscriptions.push(this.dataService.sorting(value).subscribe(
      (result) => {
        this.items = result;
      }));

  }

  changeMovie(event) {
    let data = event.movie;

    data[event.value] = event.number;

    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  searchs(value: string): void {
    this.subscriptions.push(this.dataService.filter(value).subscribe(
      (result) => {
        this.items = result;
      }));
  }

  detailsMovie(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((item)=>{
      if(item){
        item.unsubscribe();
      }
    });
  }
}
