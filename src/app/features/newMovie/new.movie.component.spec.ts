import { NewMovieComponent } from './new.movie.component';

describe('New Movie Component', () => {
  let sut: NewMovieComponent;
  let routerMock: any;
  let dataServiceMock: any;
  let observableMock: any;
  let fbMock: any;
  let response: any;

  beforeEach(() => {
    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };
    dataServiceMock = {
      addNewMovie: jasmine.createSpy('addNewMovie').and.returnValue(observableMock),
    };

    observableMock = {
      subscribe: jasmine.createSpy('subscribe').and.callFake((callBack?: any) => {
        if (callBack) {
          callBack(response);
        }
        return observableMock;
      })
    };
    response = Symbol('response');

    fbMock = {
      group: jasmine.createSpy('group')
    };

    sut = new NewMovieComponent(fbMock, dataServiceMock, routerMock);
  });

  it('should match interface', () => {
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.buildForm).toBeDefined();
    expect(sut.onValueChanges).toBeDefined();
    expect(sut.onSabmite).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
  });

  xdescribe('#ngOnInit', () => {
    beforeEach(() => {
      sut.ngOnInit();
    });

    it('should be buildForm', () => {
      expect(sut.buildForm).toHaveBeenCalled();
    });
  });
});
