import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { skillsInterface } from 'src/app/interfaces/skillsInterface';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from 'src/app/shared/i18n/en';
import { locale as spanish } from 'src/app/shared/i18n/es';
import { skills } from 'src/app/shared/skills/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

    skills: Array<skillsInterface> = [];

    constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
      this._translationLoaderService.loadTranslations(english, spanish);
      this._translateService.setDefaultLang('en');
      this.skills=skills;
    }
    
    ngOnInit(): void {
      this.skills=skills;
    }

    detailOnClick(skill: skillsInterface) {
      skill.detailIsDisplayed = !skill.detailIsDisplayed;
    }
}
