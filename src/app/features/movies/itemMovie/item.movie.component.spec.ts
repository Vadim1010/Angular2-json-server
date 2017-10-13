import { ItemMovieComponent } from './item.movie.component';

describe('Item Movie component', () => {
  const sut: ItemMovieComponent = new ItemMovieComponent();
  let valueType: string = 'Hello';
  let numberValue: number = 0;
  let movieMock: any;

  it('should match interface', () => {
    expect(sut.changeRating).toBeDefined();
    expect(sut.changeLikes).toBeDefined();
    expect(sut.clickHeader).toBeDefined();
  });

  describe('#changeRating', () => {
    let changeMovieEmitSpy: jasmine.Spy;

    beforeEach(() => {
      changeMovieEmitSpy = spyOn(sut.changeMovie, 'emit');
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

      sut.changeRating(valueType, numberValue);
    });

    it('should emit changeMovie', () => {
      expect(changeMovieEmitSpy).toHaveBeenCalledWith({
        itemMovie: sut.movie,
        value: 'Hello',
        number: 0
      });
    });
  });

  describe('#changeLikes', () => {
    let changeRatingSpy: jasmine.Spy;

    beforeEach(() => {
      changeRatingSpy = spyOn(sut, 'changeRating');

      sut.changeLikes({value: valueType, number: numberValue});
    });

    it('should emit changeRating', () => {
      expect(changeRatingSpy).toHaveBeenCalledWith(valueType, numberValue);
    });
  });

  describe('#clickHeader', () => {
    let changeDetailEmitSpy: jasmine.Spy;
    let valueId: number = 0;

    beforeEach(() => {
      changeDetailEmitSpy = spyOn(sut.changeDetail, 'emit');

      sut.clickHeader(valueId);
    });

    it('should call changeDetail', () => {
      expect(changeDetailEmitSpy).toHaveBeenCalledWith(valueId);
    });
  });
});
