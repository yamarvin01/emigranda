import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  public data = [
    {
      heading: 'РЕЗУЛЬТАТЫ НАШИХ УЧЕНИКОВ',
      subHeading: null,
      items: [
        {
          text: 'ИНДИВИДУАЛЬНАЯ ПОДГОТОВКА К ЭКЗАМЕНАМ  Start Deutsch/ telc Deutsch, Zertifikat Deutsch - 100% результат',
        },
        {
          text: 'ИНТЕГРАЦИОННЫЕ КУРСЫ - за 3 последних года сертификат DTZ с результатом B1 получило 80% учеников',
        },
        {
          text: 'Наши ученики легко поступают в вузы Германии и Австрии, успешно проходят собеседования, находят работу и достигают своих целей',
        },
      ],
    },
  ];
}
