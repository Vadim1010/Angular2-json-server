import { LikeComponent } from './like.component';

describe('Like Component', function () {
  const sut: LikeComponent = new LikeComponent();

  it('should match interface', () => {
    expect(sut.likes).toBe(0);

    expect(sut.clickLike).toBeDefined();
    expect(sut.changeRating).toBeDefined();
  });

  describe('#changeRating', () => {
    let valueType: string = 'Hello';
    let numberValue: number = 0;
    let clickLikeEmitSpy: jasmine.Spy;

    beforeEach(() => {
      clickLikeEmitSpy = spyOn(sut.clickLike, 'emit');

      sut.changeRating (valueType, numberValue);
    });

    it('should emit clickLike', () => {
      expect(clickLikeEmitSpy).toHaveBeenCalledWith({ value: 'Hello', number: 0 });
    });
  });
});
