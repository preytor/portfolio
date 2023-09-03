import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { projectsInterface } from 'src/app/interfaces/projectsInterface';
import { TranslationLoaderService } from 'src/app/services/translation-loader.service';
import { locale as english } from 'src/app/shared/i18n/en';
import { locale as spanish } from 'src/app/shared/i18n/es';
import { projectsEn } from 'src/app/shared/projects/en';
import { projectsEs } from 'src/app/shared/projects/es';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Array<projectsInterface> = [];

  constructor(private _translationLoaderService: TranslationLoaderService, private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, spanish);
    this._translateService.setDefaultLang('en');
    this._translateService.onLangChange.subscribe(()=>{
      if(localStorage.getItem("lang")=="es"){
        this.projects=projectsEs;
      } else{
        this.projects=projectsEn;
      }
    });
  }
  
  ngOnInit(): void {
    if(localStorage.getItem("lang")=="es"){
      this.projects=projectsEs;
    } else{
      this.projects=projectsEn;
    }
  }

  detailOnClick(project: projectsInterface) {
    project.detailIsDisplayed = !project.detailIsDisplayed;
  }
}
