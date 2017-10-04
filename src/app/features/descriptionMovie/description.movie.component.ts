import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import {Http} from '@angular/http';

@Component({
  selector: 'mv-movie-description',
  templateUrl: './description.movie.html',
  styleUrls: ['./description.movie.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDescriptionComponent implements OnInit {
  public item;
  public id: string = '2';

  constructor(private http: Http) {
  }

  public ngOnInit() {
    this.http.get(` http://localhost:3000/get/posts/movies?id=${this.id}`).subscribe(
      (result) => this.item = result.json(),
      (error) => console.log(error.statusText),
    );
  }

  public go() {
    console.log(this.item);
  }
}
