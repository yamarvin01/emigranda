import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WA_LOCAL_STORAGE, WA_WINDOW } from '@ng-web-apis/common';
import { TUI_DARK_MODE, TUI_DARK_MODE_KEY, TuiRoot } from '@taiga-ui/core';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';
import { PriceComponent } from './components/price/price.component';
import { TimeComponent } from './components/time/time.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    ResultsComponent,
    PriceComponent,
    TimeComponent,
    ReviewsComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'emigranda';

  private readonly key = inject(TUI_DARK_MODE_KEY);
  private readonly storage = inject(WA_LOCAL_STORAGE);
  private readonly media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');

  protected readonly darkMode = inject(TUI_DARK_MODE);
}
