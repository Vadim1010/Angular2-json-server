import {
  Component,
  Input, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'mv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() className: string = 'btn';
  @Input() type: string = 'button';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
}
