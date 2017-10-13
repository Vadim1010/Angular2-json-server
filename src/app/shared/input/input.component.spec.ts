import { InputComponent } from './input.component';

describe('Input Component', function () {
  const sut: InputComponent = new InputComponent();

  it('should match interface', () => {
    expect(sut.change).toBeDefined();

    expect(sut.className).toBe('btn');
    expect(sut.type).toBe('button');
    expect(sut.value).toBe('');
    expect(sut.name).toBe('');
    expect(sut.placeholder).toBe('');
  });

  describe('#change', () => {
    let changeInputEmitSpy: jasmine.Spy;
    let value: string = 'Hello';

    beforeEach(() => {
      changeInputEmitSpy = spyOn(sut.changeInput, 'emit');

      sut.change(value);
    });

    it('should emit changeInput', () => {
      expect(changeInputEmitSpy).toHaveBeenCalledWith('Hello');
    });
  });
});
