import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-results',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  public data = [
    {
      heading: 'results.title',
      items: [
        {
          text: 'results.paragraph.first',
        },
        {
          text: 'results.paragraph.second',
        },
        {
          text: 'results.paragraph.third',
        },
        {
          text: 'results.paragraph.fourth',
        },
        {
          text: 'results.paragraph.fifth',
        },
        {
          text: 'results.paragraph.sixth',
        },
      ],
    },
  ];
}
