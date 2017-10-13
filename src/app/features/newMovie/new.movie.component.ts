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
import { MovieModel } from '../../shared/interfase.models';

@Component({
  selector: 'mv-new-movie',
  templateUrl: 'new.movie.component.html',
  styleUrls: ['new.movie.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NewMovieComponent implements OnInit, OnDestroy {
  @Input() movies: MovieModel[];

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log('new movie');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
