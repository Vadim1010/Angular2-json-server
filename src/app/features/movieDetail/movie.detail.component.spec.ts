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
    // jasmine.createSpyObj('paramMapMock', ['paramMap']);
    routeMock = {
      paramMap: {
        switchMap: jasmine.createSpy('switchMap').and.returnValue(movieMock)
      }
    };

    sut = new MovieDetailComponent(dataServiceMock, routerSpy, routeMock);
  });
  it('should match interface', () => {
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.goHome).toBeDefined();
    expect(sut.changeRating).toBeDefined();
    expect(sut.changeLikes).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
  });

  xdescribe('#ngOnInit', () => {
    beforeEach(() => {

      sut.ngOnInit();
    });

    it('', () => {

    });

  });

  describe('#goHome', () => {
    beforeEach(() => {
      sut.goHome();
    });

    it('should call goHome', () => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  xdescribe('#changeRating', () => {
    let changeRatingSpy: jasmine.Spy;
    beforeEach(() => {
      changeRatingSpy = spyOn(sut, 'changeRating');

      sut.changeRating(eventMovieMock.value, eventMovieMock.number);

    });

    it('should call changeRating', () => {
      expect(changeRatingSpy).toHaveBeenCalledWith('string', 0);
    });

    it('should call dataService.postData', () => {
      expect(dataServiceMock.postData).toHaveBeenCalledWith(movieMock, movieMock.id);
    });
  });

  describe('#changeLikes', () => {
    let changeLikesSpy: any;
    let changeRatingSpy: any;

    beforeEach(() => {
      changeLikesSpy = spyOn(sut, 'changeLikes');

      sut.changeLikes(eventMovieMock);
    });

    it('should call changeLikes', () => {
      expect(sut.changeLikes).toHaveBeenCalledWith(eventMovieMock);
    });

    it('should call changeRating', () => {
      changeRatingSpy = spyOn(sut, 'changeRating');
      sut.changeLikes(eventMovieMock);

      expect(sut.changeRating).toHaveBeenCalledWith(eventMovieMock.value, eventMovieMock.number);
    });
  });

  describe('#ngOnDestroy', () => {
    let unsubscribeSpy: jasmine.Spy;

    beforeEach(() => {
      sut.subscription = {
        unsubscribe: jasmine.createSpy('unsubscribe')
      };

      sut.ngOnDestroy();
    });

    it('should call unsubscribe', () => {

      expect(sut.subscription.unsubscribe).toHaveBeenCalled();
    });
  });
});
