import { Component, OnInit, SimpleChange, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwitchObject } from '../../shared/models/switchObject.model';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})

export class SettingsPageComponent implements OnInit, AfterViewInit {

  switchPrices: string = 'prices';
  switchRepositories: string = 'repos';
  switchLanguage: string = 'english';

  switchValuePrices: boolean = false;
  switchValueRepositories: boolean = false;
  switchValueLanguage: boolean = true;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('settings');
    if (data !== null ) {
      let settings = JSON.parse(data);
      this.switchValuePrices = settings.prices;
      this.switchValueRepositories = settings.repos;
      this.switchValueLanguage = settings.english;
    }
  }

  ngAfterViewInit () {
    const switchElementPrices = <HTMLInputElement>document.getElementById(this.switchPrices);
    switchElementPrices.checked = this.switchValuePrices;
    const switchElementLanguage = <HTMLInputElement>document.getElementById(this.switchLanguage);
    switchElementLanguage.checked = this.switchValueLanguage;
    const switchElementRepos = <HTMLInputElement>document.getElementById(this.switchRepositories);
    switchElementRepos.checked = this.switchValueRepositories;
  }

  recieveSwitchValue($event : SwitchObject) {
    const switchObject = $event;
    console.log(switchObject)
    if (switchObject.id === this.switchPrices) {
      this.switchValuePrices = switchObject.value;
    } else if (switchObject.id === this.switchRepositories) {
      this.switchValueRepositories = switchObject.value
    } else if (switchObject.id === this.switchLanguage) {
      this.switchValueLanguage = switchObject.value;
    };
  };

  handleSave() {
    const settings = {
      prices: this.switchValuePrices,
      repos: this.switchValueRepositories,
      english: this.switchValueLanguage
    };
    if (this.switchValueLanguage) {
      this.translate.use('nl');
    } else if (!this.switchValueLanguage){
      this.translate.use('en');
    };

    localStorage.setItem('settings', JSON.stringify(settings));
    console.log(settings)
  };

}
