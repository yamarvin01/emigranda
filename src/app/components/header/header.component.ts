import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiLink, TUI_DARK_MODE } from '@taiga-ui/core';
import { SummaryComponent } from '../summary/summary.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe, TuiLink, SummaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
