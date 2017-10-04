import {
  Component,
  Input, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'mv-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarComponent {
  @Input() className: string = 'star';
}
