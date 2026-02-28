import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TUI_DARK_MODE, TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TuiButton, TuiIcon],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);

  // Перевод ngx-translate //
  private translate = inject(TranslateService);
  public useLanguage(language: string): void {
    this.translate.use(language);
  }
  //
}
