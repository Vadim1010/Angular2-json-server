import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {DataService} from '../../core'
import {MovieModels} from '../movie.model'

@Component({
  selector: 'mv-movie-component',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieComponent implements OnInit {
  private numberStars: number[];
  private itemDescription: MovieModels;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap)=>this.dataService.getById(+params.get('id')))
      .subscribe((movie)=> this.itemDescription = movie, (error)=>this.router.navigate(['/404']));

    this.numberStars = this.dataService.numberStars;
  }

  ngOnDestroy() {
  }

}
