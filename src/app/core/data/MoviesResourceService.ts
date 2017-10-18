import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MovieModel } from '../../shared/interface.models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Observable/throw';

import { Router } from '@angular/router';

@Injectable()
export class MoviesResourceService {
  numberStars: number[] = [1, 2, 3, 4, 5];

  private moviesUrl: string = 'http://localhost:3000/movies/';
  private headersType: Headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});

  constructor (private http: Http, private router: Router) {
  }

  getAll (): Observable<MovieModel[]> {
    return this.http.get(this.moviesUrl)
      .map(this.callbackMap)
      .catch(this.callbackError);
  }

  getById (id: number): Observable<MovieModel> {
    return this.http.get(this.moviesUrl + id)
      .map(this.callbackMapMovie)
      .catch(this.callbackErrorMovie);
  }

  sorting (value: string): Observable<MovieModel[]> {
    return this.http.get(`${this.moviesUrl}?_sort=${value}&_order=desc`)
      .map(this.callbackMap)
      .catch(this.callbackError);
  }

  filter (value: string): Observable<MovieModel[]> {
    return this.http.get(`${this.moviesUrl}?q=${value}`)
      .map(this.callbackMap)
      .catch(this.callbackError);
  }

  postData (data: MovieModel, id: number): Observable<MovieModel[]> {
    return this.http.put(`${this.moviesUrl}${id}`, this.toJson(data), {headers: this.headersType})
      .map(this.callbackMap)
      .catch(this.callbackError);
  }

  addNewMovie (data: MovieModel): Observable<MovieModel> {

    return this.http.post(this.moviesUrl, this.toJson(data), {headers: this.headersType})
      .map(this.callbackMapMovie)
      .catch(this.callbackErrorMovie);
  }

  callbackMap (response: Response): Observable<MovieModel[]> {
    return response.json();
  }

  callbackMapMovie (response: Response): Observable<MovieModel> {
    return response.json();
  }

  callbackError (error: Response): Observable<MovieModel[]> {
    return Observable.throw(error.json().error);
  }

  callbackErrorMovie (error: Response): Observable<MovieModel> {
    return Observable.throw(error.json().error);
  }

  toJson (data: MovieModel): string {
    return JSON.stringify(data);
  }
}
