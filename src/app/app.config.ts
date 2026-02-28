import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    NG_EVENT_PLUGINS,

    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'en', // Язык будет использоваться, если не найден перевод
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/', // В таком формате хранятся перевод-файлы в директории public
        suffix: '.json', // В таком формате хранятся перевод-файлы в директории public
      }),
    }),
    // Определяет язык, который пользователь выбрал в браузере
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      translate.use(translate.getBrowserLang() || 'en'); // Если язык не определен, то будет английский
    }),
  ],
};
