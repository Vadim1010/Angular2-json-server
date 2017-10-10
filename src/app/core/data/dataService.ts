import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MovieModels } from '../../features/movie.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router} from '@angular/router';

@Injectable()
export class DataService {
  numberStars: number[] = [1, 2, 3, 4, 5];

  private moviesUrl: string = 'http://localhost:3000/movies/';

  constructor(private http: Http, private router: Router) {
  }

  getAll(): Observable<MovieModels[]> {
    return this.http.get(this.moviesUrl)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  getById(id: number): Observable<MovieModels> {
    return this.http.get(this.moviesUrl + id)
      .map(this._callbackMap)
      .catch((error: any) => {this.router.navigate(['/404']); return Observable.throw(error.json().error)});
  }

  sorting(value: string): Observable<MovieModels[]> {
    return this.http.get(`${this.moviesUrl}?_sort=${value}&_order=desc`)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  filter(value: string): Observable<MovieModels[]> {
    return this.http.get(`${this.moviesUrl}?q=${value}`)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  postData(data: MovieModels, id: number): Observable<MovieModels[]> {
    const body = JSON.stringify(data);
    let headersType = new Headers({'Content-Type': 'application/json; charset=utf-8'});

    return this.http.put(`${this.moviesUrl}${id}`, body, {headers: headersType})
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  private _callbackMap(response: Response): Observable<MovieModels[]> {
    return response.json()
  }

  private _callbackError(error: any): Observable<MovieModels[]> {
    return Observable.throw(error.json().error || 'Server error')
  }
}
