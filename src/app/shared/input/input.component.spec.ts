import { InputComponent } from './input.component';

describe('Input Component', function () {

  let sut: any = new InputComponent();

  describe('#change', () => {
    let changeSpy: jasmine.Spy;
    let changeInputSpy: jasmine.Spy;
    let goSpy: jasmine.Spy;
    let inputEmitSpy: jasmine.Spy;
    let value: string = 'Hello';

    beforeEach(() => {
      changeInputSpy = spyOn(sut, 'changeInput');
      inputEmitSpy = spyOn(sut.changeInput, 'emit');

      sut.change(value);
    });

    it('should match interface', () => {
      expect(sut.change).toBeDefined();
      expect(sut.changeInput.emit).toBeDefined();

      expect(sut.className).toBe('btn');
      expect(sut.type).toBe('button');
      expect(sut.value).toBe('');
      expect(sut.name).toBe('');
      expect(sut.placeholder).toBe('');
    });

    it('call change', () => {
      expect(inputEmitSpy).toHaveBeenCalledWith('Hello');
    });
  });
});
