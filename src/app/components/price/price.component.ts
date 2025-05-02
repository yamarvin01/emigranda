import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-price',
  imports: [CommonModule, TuiButton],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {
  public items = [
    {
      title: 'Индивидуальное занятие',
      subTitle: '90 минут',
      text: '4900₽',
    },
    {
      title: 'Занятие в мини-группе (до 3 человек)',
      subTitle: '90 минут',
      text: '2700₽',
    },
    {
      title: 'Группа в Телеграме',
      subTitle: 'Материалы для самостоятельной подготовки',
      text: '1000₽ / мес',
    },
  ];
}
