import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TuiIcon, TuiLink } from '@taiga-ui/core';

@Component({
  selector: 'app-about',
  imports: [TuiLink, TuiIcon],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(private cd: ChangeDetectorRef) {}
}
