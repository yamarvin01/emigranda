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
      title: 'Психологическая консультация',
      priceText: '50€/ 5 000₽',
      btnText: 'Оставить заявку',
    },
    {
      title: 'Персональный урок немецкого',
      priceText: '50€/ 5 000₽',
      btnText: 'Оставить заявку',
    },
    {
      title: 'Курс немецкого языка (все уровни)',
      priceText: '250€/ 25 000₽',
      btnText: 'Оставить заявку',
    },
  ];

  public navigate(): void {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfNk1Qydnrs_aye30rSgGGC2W-2dzjyiXHkofJ3xAl6HW-pkA/viewform?usp=header',
      '_blank'
    );
  }
}
