import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiIcon, TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-summary',
  imports: [
    CommonModule,
    TuiIcon,
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
