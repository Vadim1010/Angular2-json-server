import { MoviesComponent } from './movies.component';

describe('Movies Component', () => {
  let sut: MoviesComponent;
  let dataServiceMock: any;
  let observableMock: any;
  let observableSpy: any;
  let response: any;
  let routerMock: any;
  let numberStarsMok: number[];
  let movieMock: any;
  let eventMovieMock: any;

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

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    sut = new MoviesComponent(dataServiceMock, routerMock);
  });

  it('should match interface', () => {
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.sorting).toBeDefined();
    expect(sut.changeMovie).toBeDefined();
    expect(sut.searchs).toBeDefined();
    expect(sut.detailsMovie).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {

      sut.ngOnInit();
    });

    it('should be filled numberStars', () => {
      expect(sut.numberStars).toEqual(dataServiceMock.numberStars);
    });

    it('should change subscriptions length', () => {
      expect(sut.subscriptions.length).toBe(length + 1);
    });

    describe('#dataService.getAll', () => {
      it('should call dataService.getAll', () => {
        expect(dataServiceMock.getAll).toHaveBeenCalled();
      });

      it('should set movies', () => {
        expect(sut.movies).toEqual(response);
      });
    });
  });

  describe('#sorting', () => {
    beforeEach(() => {
      let value: string = 'likes';

      sut.sorting(value);
    });

    it('should change subscriptions length', () => {
      expect(sut.subscriptions.length).toBe(length + 1);
    });

    describe('#dataService.push', () => {
      it('should call dataService.push', () => {
        expect(dataServiceMock.sorting).toHaveBeenCalled();
      });

      it('should set movies', () => {
        expect(sut.movies).toEqual(response);
      });
    });
  });

  describe('#changeMovie', () => {
    beforeEach(() => {

      sut.changeMovie(eventMovieMock);
    });

    it('should change subscriptions length', () => {
      expect(sut.subscriptions.length).toBe(length + 1);
    });

    describe('#dataService.postData', () => {
      it('should call dataService.postData', () => {
        expect(dataServiceMock.postData).toHaveBeenCalled();
      });
    });
  });

  describe('#searchs', () => {
    beforeEach(() => {
      let value: string = 'Hello';

      sut.searchs(value);
    });

    it('should change subscriptions length', () => {
      expect(sut.subscriptions.length).toBe(length + 1);
    });

    describe('#dataService.filter', () => {
      it('should call dataService.filter', () => {
        expect(dataServiceMock.filter).toHaveBeenCalled();
      });
    });
  });

  describe('#detailsMovie', () => {
    beforeEach(() => {
      let value: number = 0;

      sut.detailsMovie(value);
    });

    it('should call dataService.filter', () => {
      expect(routerMock.navigate).toHaveBeenCalledWith(['/movie/' + 0]);
    });
  });

  describe('#ngOnDestroy', () => {
    let subscriptionsSpy: any;

    beforeEach(() => {
      subscriptionsSpy = spyOn(sut.subscriptions, 'forEach');

      sut.ngOnDestroy();
    });

    it('should call subscriptions forEach', () => {
      expect(subscriptionsSpy).toHaveBeenCalled();
    });

    it('should change subscriptions length', () => {
      expect(sut.subscriptions.length).toBe(0);
    });
  });
});
