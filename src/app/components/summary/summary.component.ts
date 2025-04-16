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

  public reviews: { name: string, title: string, text: string }[] = [
    {
      name: 'Наталия',
      title: 'Русский язык • ЕГЭ по русскому языку',
      text: 'От нас только самые лучшие рекомендации, дочь довольна, ей было комфортно в мини-группе. Благодарим за профессионализм и отдельно — за моральную и психологическую поддержку',
    },
    {
      name: 'Елизавета',
      title: 'Русский язык • ЕГЭ по русскому языку',
      text: 'От нас только самые лучшие рекомендации, дочь довольна, ей было комфортно в мини-группе. Благодарим за профессионализм и отдельно — за моральную и психологическую поддержку',
    },
    {
      name: 'Мария',
      title: 'Русский язык • ЕГЭ по русскому языку',
      text: 'От нас только самые лучшие рекомендации, дочь довольна, ей было комфортно в мини-группе. Благодарим за профессионализм и отдельно — за моральную и психологическую поддержку',
    },
    {
      name: 'Лада',
      title: 'Русский язык • ЕГЭ по русскому языку',
      text: 'От нас только самые лучшие рекомендации, дочь довольна, ей было комфортно в мини-группе. Благодарим за профессионализм и отдельно — за моральную и психологическую поддержку',
    },
  ];
}
