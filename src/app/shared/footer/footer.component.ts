import {
  Component,
  Input, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'mv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  @Input() className: string = 'footer';
}
