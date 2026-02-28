import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-price',
  imports: [CommonModule, TranslatePipe, TuiButton],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {
  public items = [
    {
      title: 'price.card.first',
      priceText: '50€/ 5 000₽',
      btnText: 'price.request',
    },
    {
      title: 'price.card.second',
      priceText: '50€/ 5 000₽',
      btnText: 'price.request',
    },
    {
      title: 'price.card.third',
      priceText: '250€/ 25 000₽',
      btnText: 'price.request',
    },
  ];

  public navigate(): void {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfNk1Qydnrs_aye30rSgGGC2W-2dzjyiXHkofJ3xAl6HW-pkA/viewform?usp=header',
      '_blank'
    );
  }
}
