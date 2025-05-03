import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
