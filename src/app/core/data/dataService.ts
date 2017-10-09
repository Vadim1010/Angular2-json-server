import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {MovieModels} from '../../features/movie.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private moviesUrl: string = 'http://localhost:3000/movies/';

  numberStars: number[] = [1, 2, 3, 4, 5];

  constructor(private http: Http) {
  }

  getAll(): Observable<MovieModels[]> {
    return this.http.get(this.moviesUrl)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  getById(id: number): Observable<MovieModels> {
    return this.http.get(this.moviesUrl + id)
      .map((response) => {
        return response.json()
      })
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  sorting(value: string): Observable<MovieModels[]> {
    return this.http.get(`${this.moviesUrl}?_sort=${value}&_order=desc`)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  filter(value: string): Observable<MovieModels[]> {
    return this.http.get(`${this.moviesUrl}?q=${value}`)
      .map((response) => response.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  postData(data: MovieModels, id: number): Observable<MovieModels[]> {
    const body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});

    return this.http.put(`${this.moviesUrl}${id}`, body, {headers: headers})
      .map((resp: Response) => resp.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}
