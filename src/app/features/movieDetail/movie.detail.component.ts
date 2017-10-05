import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject';
import {DataService} from '../../core'
import {MovieModels} from '../movie.model'
import {Subscription} from "rxjs";

@Component({
  selector: 'mv-movie-detail',
  templateUrl: 'movie.detail.component.html',
  styleUrls: ['movie.detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private numberStars: number[];
  private itemDescription: MovieModels;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap)=>this.dataService.getById(+params.get('id')))
      .subscribe((movie)=> this.itemDescription = movie, (error)=>this.router.navigate(['/404']));

    this.numberStars = this.dataService.numberStars;

    console.log(document.getElementById('showScroll'))
  }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
