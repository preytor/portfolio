import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Pablo's Portfolio | Software Developer";
  currentYear:number;
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'es']);
    this._translateService.setDefaultLang('en');
    this.currentYear=new Date().getFullYear();
  }
  
}
