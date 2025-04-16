import { Component } from '@angular/core';
import { TuiIcon, TuiLink } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  imports: [
    TuiLink,
    TuiIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
