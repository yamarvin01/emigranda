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
      title: 'Индивидуальная консультация',
      subTitle: '70 минут',
      text: '30€/ 3000₽',
    },
    {
      title: 'Занятие в мини-группе (от 4х человек)',
      subTitle: '70 минут',
      text: '10€/ 1000₽',
    },
    {
      title: 'Занятие в мини-группе (до 3х человек)',
      subTitle: '70 минут',
      text: '15€/ 1500₽',
    },
  ];

  public navigate(): void {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfNk1Qydnrs_aye30rSgGGC2W-2dzjyiXHkofJ3xAl6HW-pkA/viewform?usp=header',
      '_blank'
    );
  }
}
