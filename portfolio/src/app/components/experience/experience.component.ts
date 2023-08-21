import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { experiencesInterface } from 'src/app/interfaces/experiencesInterface';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from 'src/app/shared/i18n/en';
import { locale as spanish } from 'src/app/shared/i18n/es';
import { experiencesEn } from 'src/app/shared/experiences/en';
import { experiencesEs } from 'src/app/shared/experiences/es';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  companies: Array<experiencesInterface> = [];

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.companies=experiencesEn;
      } else{
        this.companies=experiencesEs;
      }
    });
  }

  ngOnInit(): void {
    if(this._translateService.currentLang=="en"){
      this.companies=experiencesEn;
    } else{
      this.companies=experiencesEs;
    }
  }

  detailOnClick(experience: experiencesInterface) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }
}
