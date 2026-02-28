import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TuiLink } from '@taiga-ui/core';

@Component({
  selector: 'app-about',
  imports: [TuiLink, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(private cd: ChangeDetectorRef) {}
}
