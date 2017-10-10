import {
  Component,
  Input, Output, ViewEncapsulation, EventEmitter
} from '@angular/core';

@Component({
  selector: 'mv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class InputComponent {
  @Input() className: string = 'btn';
  @Input() type: string = 'button';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Output() changeInput: EventEmitter<any> = new EventEmitter();

  constructor () {
  }

  change (event): void {
    this.changeInput.emit(event.target.value);
  }
}
