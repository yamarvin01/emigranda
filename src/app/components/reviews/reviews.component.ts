import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-reviews',
  imports: [TranslatePipe, TuiCarousel, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  public images: string[] = [
    'assets/reviews/2025-05-10 (2).png',
    'assets/reviews/2025-05-10 (3).png',
    'assets/reviews/2025-05-10 (4).png',
    'assets/reviews/2025-05-10 (5).png',
    'assets/reviews/2025-05-10.png',
    'assets/reviews/photo_2025-05-30_21-46-16.jpg',
    'assets/reviews/photo_2025-04-17 00.26.40.jpeg',
    'assets/reviews/photo_2025-05-21_16-44-22 (2).jpg',
    'assets/reviews/photo_2025-04-17 00.26.44.jpeg',
    'assets/reviews/photo_2025-04-17 00.26.47.jpeg',
    'assets/reviews/photo_2025-04-17 00.26.54.jpg',
    'assets/reviews/photo_2025-05-21_16-38-33.jpg',
    'assets/reviews/photo_2025-05-21_16-44-22.jpg',
    'assets/reviews/photo_2025-12-07 (1).jpg',
    'assets/reviews/photo_2025-12-07 (2).jpg',
    'assets/reviews/photo_2025-12-07 (3).jpg',
    'assets/reviews/photo_2025-12-07 (4).jpg',
    'assets/reviews/photo_2025-12-07 (5).jpg',
    'assets/reviews/photo_2025-12-07 (6).jpg',
    'assets/reviews/Снимок экрана 2025-12-07 (1).png',
    'assets/reviews/Снимок экрана 2025-12-07 (2).png',
    'assets/reviews/Снимок экрана 2025-12-07 (3).png',
    'assets/reviews/Снимок экрана 2025-12-07 (4).png',
    'assets/reviews/Снимок экрана 2025-12-07 (5).png',
  ];
}
