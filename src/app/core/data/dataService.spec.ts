import { DataService } from './dataService';
import { Observable } from 'rxjs';

describe('Data Service', () => {
  let sut: DataService;
  let movieMock: any;
  let routerMock: any;
  let httpMock: any;
  let serverResponseMock: any;
  let mapResponseMock: any;
  let url = 'http://localhost:3000/movies/';
  const responseMock = Observable.of('response');
  const ObservableErrorMock = Observable.throw('error');

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

    httpMock = jasmine.createSpyObj('httpMock', ['get', 'post', 'put', 'delete']);

    serverResponseMock = jasmine.createSpyObj('serverResponseMock', ['json']);

    mapResponseMock = jasmine.createSpyObj('mapResponseMock', ['map', 'catch']);

    mapResponseMock.map.and.returnValue(responseMock);
    mapResponseMock.catch.and.returnValue(ObservableErrorMock);

    httpMock.get.and.returnValue(mapResponseMock);

    sut = new DataService(httpMock, routerMock);
  });

  it('should match interface', () => {
    expect(sut.getAll).toBeDefined();
    expect(sut.getById).toBeDefined();
    expect(sut.sorting).toBeDefined();
    expect(sut.filter).toBeDefined();
    expect(sut.postData).toBeDefined();
    expect(sut._callbackMap).toBeDefined();
    expect(sut._callbackError).toBeDefined();
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

    xdescribe('#router', () => {
      beforeEach(() => {

      });
      it('should router navigate', () => {
        expect(routerMock.navigate).toHaveBeenCalled();
      });
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

  xdescribe('#putData', () => {
    let id: any;
    beforeEach(() => {
      id = 'test';
      url = `http://localhost:3000/movies/?q=${id}`;

      sut.putData(movieMock, id);
    });

    it('should put Data', () => {
      expect(httpMock.put).toHaveBeenCalledWith(url, movieMock, {header: 'header'});
    });
  });

  describe('#_callbackMap', () => {
    const convertedResponse = Symbol('converted server response');
    beforeEach(() => {
      serverResponseMock.json.and.returnValue(convertedResponse);
    });

    it('should extract movie from response when content-type is json', () => {
      expect(sut._callbackMap(serverResponseMock)).toEqual(convertedResponse);
    });
  });

  xdescribe('#_callbackError', () => {
    const convertedResponse = Symbol('converted server response');
    beforeEach(() => {
      serverResponseMock.json.and.returnValue(convertedResponse);
    });

    it('should extract movie from error when content-type is json', () => {
      expect(sut._callbackError(convertedResponse)).toEqual(ObservableErrorMock);
    });
  });
});
