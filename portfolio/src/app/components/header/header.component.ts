import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from '../../shared/i18n/en';
import { locale as spanish } from '../../shared/i18n/es';
import { headerInterface } from 'src/app/interfaces/headerInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  language: string = "";

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    if(localStorage.getItem("lang")) {
      this._translateService.setDefaultLang(this.language);
      this._translateService.store.currentLang=this.language;
      this._translateService.use(this.language);
      localStorage.setItem("lang", this.language);
    } else {
      this._translateService.setDefaultLang('en');
      this._translateService.store.currentLang='en';
      this._translateService.use('en');
      localStorage.setItem("lang", 'en');
    }
  }

  onlanguagechange($event: any) {
    let lang=$event.value;
    localStorage.setItem("lang", lang);
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
    this._translateService.currentLang=lang;
  }
}
