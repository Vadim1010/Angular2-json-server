import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  OnDestroy, OnInit
} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import {DataService} from '../../core'
import {MovieModels} from '../movie.model'

@Component({
  selector: 'mv-movie-detail',
  templateUrl: 'movie.detail.component.html',
  styleUrls: ['movie.detail.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private numberStars: number[];
  private itemDescription: MovieModels;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.route.paramMap
      .switchMap((params: ParamMap)=>this.dataService.getById(+params.get('id')))
      .subscribe((movie)=> this.itemDescription = movie, (error)=>this.router.navigate(['/404'])));

    this.numberStars = this.dataService.numberStars;
    document.documentElement.scrollTop = 0;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  changeRating(value: string, number: number): void {
    let data = this.itemDescription;
    data[value] = number;

    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  changeLikes(event){
    let data = this.itemDescription;
    data[event.value] = event.number;
    this.subscriptions.push(this.dataService.postData(data, data.id).subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.forEach((item)=>{
      if(item){
        item.unsubscribe()
      }
    });
  }
}
