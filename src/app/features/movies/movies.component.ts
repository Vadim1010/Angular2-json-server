import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input
} from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../../core';
import {MovieModels} from '../movies.models'

@Component({
  selector: 'mv-movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  @Input() items: MovieModels[];
  public itemDescription;
  public numberStars: number[];

  constructor(private http: Http, private dataService: DataService) {
  }

  public ngOnInit():void {
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

  public showMovie(id: number): void {
    window.scroll(0, 200);
    this.dataService.getById(id).subscribe(
      (result) => {
        this.itemDescription = result[0];
      });
  }

  public changeRating(value: number, id: number, check?: boolean): void {
    if (check) {
      this.itemDescription.stars = value;
    }

    this.items.forEach((item) => {
      if (item.id === id) {
        item.stars = value;
        this.dataService.postData(item, item.id).subscribe();
      }
    }, this);
  }

  public changeLikes(id: number, check: boolean): void {
    this.items.forEach((item) => {
      if (item.id === id) {
        item.likes += 1;
        this.dataService.postData(item, item.id).subscribe();
      }
    },this);
  }

  public changeDisLikes(id: number): void {
    this.items.forEach((item) => {
      if (item.id === id) {
        item.likes -= 1;
        this.dataService.postData(item, item.id).subscribe();
      }
    }, this);
  }

  public searchs(e): void {
    const value: string = e.target.value;

    this.dataService.filter(value).subscribe(
      (result) => {
        this.items = result;
      });
  }
}
