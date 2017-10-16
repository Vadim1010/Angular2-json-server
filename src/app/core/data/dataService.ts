import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MovieModel } from '../../shared/interfase.models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable/throw';

import { Router } from '@angular/router';

@Injectable()
export class DataService {
  numberStars: number[] = [1, 2, 3, 4, 5];

  private moviesUrl: string = 'http://localhost:3000/movies/';
  private headersType: Headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: Http, private router: Router) {
  }

  getAll(): Observable<MovieModel[]> {
    return this.http.get(this.moviesUrl)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  getById(id: number): Observable<MovieModel> {
    return this.http.get(this.moviesUrl + id)
      .map(this._callbackMap)
      .catch((error) => {
        this.router.navigate(['/404']);
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  sorting(value: string): Observable<MovieModel[]> {
    return this.http.get(`${this.moviesUrl}?_sort=${value}&_order=desc`)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  filter(value: string): Observable<MovieModel[]> {
    return this.http.get(`${this.moviesUrl}?q=${value}`)
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  postData(data: MovieModel, id: number): Observable<MovieModel[]> {
    const body = JSON.stringify(data);

    return this.http.put(`${this.moviesUrl}${id}`, body, {headers: this.headersType})
      .map(this._callbackMap)
      .catch(this._callbackError);
  }

  addNewMovie(data: MovieModel): Observable<MovieModel> {
    const body = JSON.stringify(data);

    return this.http.post(this.moviesUrl, body, {headers: this.headersType})
      .map(this._callbackMap)
      .catch((error) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  private _callbackMap(response: Response): Observable<MovieModel[]> {
    return response.json();
  }

  private _callbackError(error: Response): Observable<MovieModel[]> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
