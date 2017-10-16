import { MovieDetailComponent } from './movie.detail.component';

describe('Movie Detail Component', () => {
  let sut: MovieDetailComponent;
  let dataServiceMock: any;
  let observableMock: any;
  let observableSpy: any;
  let response: any;
  let routerSpy: any;
  let routeMock: any;
  let numberStarsMok: number[];
  let movieMock: any;
  let eventMovieMock: any;
  let subscriptions: any;

  beforeEach(() => {
    observableSpy = jasmine.createSpy('subscribe');
    response = Symbol('response');

    numberStarsMok = [1, 2, 3, 4, 5];

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

    eventMovieMock = {
      id: 1,
      itemMovie: movieMock,
      value: 'string',
      number: 0
    };

    observableMock = {
      subscribe: jasmine.createSpy('subscribe').and.callFake((callBack?: any) => {
        if (callBack) {
          callBack(response);
        }
        return observableMock;
      })
    };

    dataServiceMock = {
      getAll: jasmine.createSpy('getAll').and.returnValue(observableMock),
      sorting: jasmine.createSpy('sorting').and.returnValue(observableMock),
      postData: jasmine.createSpy('postData').and.returnValue(observableMock),
      filter: jasmine.createSpy('filter').and.returnValue(observableMock),
      numberStars: jasmine.createSpy('numberStars').and.returnValue(numberStarsMok)
    };

    routerSpy = {
      navigate: jasmine.createSpy('navigate')
    };
    routeMock = {
      paramMap: {
        switchMap: jasmine.createSpy('switchMap').and.returnValue(observableSpy)
      }
    };

    sut = new MovieDetailComponent(dataServiceMock, routerSpy, routeMock);
  });
  it('should match interface', () => {
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.changeMovie).toBeDefined();
    expect(sut.changeLikes).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
  });

  xdescribe('#ngOnInit', () => {
    beforeEach(() => {

      sut.ngOnInit();
    });

    it('should be filled numberStars', () => {
      expect(sut.numberStars).toEqual(dataServiceMock.numberStars);
    });

    it('should change subscriptions length', () => {
      expect(sut.subscription.length).toBe(length + 1);
    });

    describe('#dataService.getById', () => {
      it('should call dataService.getById', () => {
        expect(dataServiceMock.getById).toHaveBeenCalled();
      });

      it('should set movies', () => {
        expect(sut.movie).toEqual(response);
      });
    });

  });

  xdescribe('#changeMovie', () => {
    let valueType: any;
    let numberValue: any;

    beforeEach(() => {
      valueType = 'stars';
      numberValue = 0;

      sut.changeMovie(valueType, numberValue);

    });

    it('should change subscriptions length', () => {
      expect(sut.changeMovie).toHaveBeenCalledWith('stars', 0);
    });
  });

  describe('#changeLikes', () => {
    let changeMovieSpy: any;

    beforeEach(() => {
      changeMovieSpy = spyOn(sut, 'changeMovie');

      sut.changeLikes(eventMovieMock);
    });

    it('should call changeMovie', () => {
      expect(changeMovieSpy).toHaveBeenCalledWith(eventMovieMock.value, eventMovieMock.number);
    });
  });

  describe('#ngOnDestroy', () => {
    let subscriptionsSpy: any;

    beforeEach(() => {
      subscriptionsSpy = spyOn(sut.subscription, 'forEach');

      sut.ngOnDestroy();
    });

    it('should call subscriptions forEach', () => {
      expect(subscriptionsSpy).toHaveBeenCalled();
    });

    it('should change subscriptions length', () => {
      expect(sut.subscription.length).toBe(0);
    });
  });
});
