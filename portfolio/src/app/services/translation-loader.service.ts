import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from '../utils/Locale';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService {

  constructor(private _translateService: TranslateService) { }

  loadTranslations(...args: Locale[]): void {
      const locales = [...args];
      locales.forEach((locale) => {
          let lang: string = locale.lang;
          let data: Object = locale.data;
          // use setTranslation() with the third argument set to true
          // to append translations instead of replacing them
          this._translateService.setTranslation(locale.lang, locale.data, true);
      });
  }
}
