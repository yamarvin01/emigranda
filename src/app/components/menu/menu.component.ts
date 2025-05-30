import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TuiIcon],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
