import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiIcon, TuiLink, TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    TuiLink,
    TuiIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
