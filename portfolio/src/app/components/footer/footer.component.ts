import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from 'src/app/shared/i18n/en';
import { locale as spanish } from 'src/app/shared/i18n/es';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear:number;

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this.currentYear=new Date().getFullYear();
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.setDefaultLang('en');
  }
}
