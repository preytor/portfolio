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
  header: headerInterface = {
    home: '',
    about: '',
    skills: '',
    contactMe: ''
  }

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    if(localStorage.getItem("lang")) {
      this.language=localStorage.getItem("lang")!;
    } else {
      this.language='en';
    }
    // We set the translation data into the header variable
    let translationData = this._translateService.translations[this.language];
    this.header = translationData.header;
  }

  onlanguagechange($event: any) {
    let lang=$event.value;
    localStorage.setItem("lang", lang);
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
    // We set the translation data into the header variable
    let translationData = this._translateService.translations[this.language];
    this.header = translationData.header;
  }
}
