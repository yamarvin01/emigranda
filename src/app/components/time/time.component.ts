import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-time',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
