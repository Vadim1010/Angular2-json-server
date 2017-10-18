import { MoviesResourceService } from './MoviesResourceService';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';

describe('Movie Resource Service', () => {
  let sut: MoviesResourceService;
  let movieMock: any;
  let routerMock: any;
  let httpMock: any;
  let serverResponseMock: any;
  let mapResponseMock: any;
  let catchResponseMock: any;
  let url = 'http://localhost:3000/movies/';
  let errorMock: any;
  const responseMock = Observable.of('response');
  const headerMock = new Headers({'Content-Type': 'application/json; charset=utf-8'});

  beforeEach(() => {
    movieMock = {
      id: 1,
      title: 'title',
      posterUrl: 'url',
      stars: 0,
      likes: 0,
      genres: 'Genres',
      actor: ['Actor 1', 'Actor 2'],
      director: ['Director'],
      direcription: 'direcription'
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    errorMock = {
      json: jasmine.createSpy('json')
    };

    httpMock = jasmine.createSpyObj('httpMock', ['get', 'post', 'put', 'delete']);

    serverResponseMock = jasmine.createSpyObj('serverResponseMock', ['json']);

    mapResponseMock = jasmine.createSpyObj('mapResponseMock', ['map']);

    mapResponseMock.map.and.returnValue(responseMock);

    httpMock.get.and.returnValue(mapResponseMock);
    httpMock.post.and.returnValue(mapResponseMock);
    httpMock.put.and.returnValue(mapResponseMock);

    sut = new MoviesResourceService(httpMock, routerMock);
  });

  it('should match interface', () => {
    expect(sut.getAll).toBeDefined();
    expect(sut.getById).toBeDefined();
    expect(sut.sorting).toBeDefined();
    expect(sut.filter).toBeDefined();
    expect(sut.postData).toBeDefined();
    expect(sut.callbackError).toBeDefined();
    expect(sut.callbackMap).toBeDefined();
    expect(sut.toJson).toBeDefined();
  });

  describe('#getAll', () => {
    beforeEach(() => {
      sut.getAll();
    });

    it('should get all todos', () => {
      expect(httpMock.get).toHaveBeenCalledWith(url);
    });
  });

  describe('#getById', () => {
    let value: any;
    beforeEach(() => {
      value = 1;
      url = `http://localhost:3000/movies/${value}`;

      sut.getById(value);
    });

    it('should get getById', () => {
      expect(httpMock.get).toHaveBeenCalledWith(url);
    });

  });

  describe('#sorting', () => {
    let value: any;
    beforeEach(() => {
      value = 'test';
      url = `http://localhost:3000/movies/?_sort=${value}&_order=desc`;

      sut.sorting(value);
    });

    it('should get sorting', () => {
      expect(httpMock.get).toHaveBeenCalledWith(url);
    });
  });

  describe('#filter', () => {
    let value: any;
    beforeEach(() => {
      value = 'test';
      url = `http://localhost:3000/movies/?q=${value}`;

      sut.filter(value);
    });

    it('should get filter', () => {
      expect(httpMock.get).toHaveBeenCalledWith(url);
    });
  });

  describe('#postData', () => {
    let id: any;
    let value: string;
    beforeEach(() => {
      id = 1;
      url = `http://localhost:3000/movies/${id}`;
      value = JSON.stringify(movieMock);

      sut.postData(movieMock, id);
    });

    it('should post Data', () => {
      expect(httpMock.put).toHaveBeenCalledWith(url, value, {headers: headerMock});
    });
  });

  describe('#addNewMovie', () => {
    let value: string;
    beforeEach(() => {
      url = `http://localhost:3000/movies/`;
      value = JSON.stringify(movieMock);

      sut.addNewMovie(movieMock);
    });

    it('should call toJson', () => {
      expect(httpMock.post).toHaveBeenCalledWith(url, value, {headers: headerMock});
    });
  });

  describe('#callbackMap', () => {
    const convertedResponse = Symbol('converted server response');
    beforeEach(() => {
      serverResponseMock.json.and.returnValue(convertedResponse);
    });

    it('should extract movies from response when content-type is json', () => {
      expect(sut.callbackMap(serverResponseMock)).toEqual(convertedResponse);
    });
    it('should extract movie from response when content-type is json', () => {
      expect(sut.callbackMapMovie(serverResponseMock)).toEqual(convertedResponse);
    });
  });

  describe('#to json', () => {
    let value: any;
    beforeEach(() => {
      value = JSON.stringify(movieMock);

      sut.toJson(movieMock);
    });

    it('should call be with movie', () => {
      expect(sut.toJson).toString();
    });
  });

  xdescribe('#callbackCatch', () => {
    let errorResponseMock;

    beforeEach(() => {
      errorResponseMock = Observable.throw(errorMock);
    });

    it('should return message error', () => {
      expect(sut.callbackError(catchResponseMock)).toEqual(errorResponseMock);
    });
    it('should return message error', () => {
      expect(sut.callbackErrorMovie(catchResponseMock)).toEqual(errorResponseMock);
    });
  });
});
