import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { educationInterface } from 'src/app/interfaces/educationInterface';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from 'src/app/shared/i18n/en';
import { locale as spanish } from 'src/app/shared/i18n/es';
import { educationsEn } from 'src/app/shared/educations/en';
import { educationsEs } from 'src/app/shared/educations/es';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educations: Array<educationInterface> = [];

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.store.currentLang=="es"){
        this.educations=educationsEs;
      } else{
        this.educations=educationsEn;
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("lang")=="es"){
      this.educations=educationsEs;
    } else{
      this.educations=educationsEn;
    }
  }

  detailOnClick(education: educationInterface) {
    education.detailIsDisplayed = !education.detailIsDisplayed;
  }
}
