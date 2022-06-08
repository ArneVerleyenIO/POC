import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Settings } from '../../../shared/models/settings.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() pictureBody1: string | undefined;
  @Input() pictureBody2: string | undefined;
  @Input() description: [
    {
      content: [
        {text: string}
      ]
    }
  ] | undefined;
  @Input() code: string | undefined;
  @Input() githubLink: string | undefined;
  @Input() priceRange: string | undefined;

  // settings: Settings = {
  //   prices: false,
  //   repos: false,
  //   english: false
  // };

  displayCodeSnippet: boolean = false;
  displayPriceRange: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.description)
    },
      2000
    )
    // const settingsLocalStorage = localStorage.getItem('settings');
    // if (settingsLocalStorage) {
    //   this.settings = JSON.parse(settingsLocalStorage);
    //   console.log(this.settings);
    // }

  }

  // ngOnChanges (changes: SimpleChange) {
  //   if (this.code === undefined || this.code === "" && this.settings.repos === false) {
  //     this.displayCodeSnippet = false;
  //   } else if (this.code !== undefined && this.code !== "" && this.settings.repos === true) {
  //     this.displayCodeSnippet = true;
  //   };
  //   console.log(this.displayCodeSnippet)
  //   if (this.priceRange === undefined || this.priceRange === '' && this.settings.prices === false) {
  //     this.displayPriceRange = false;
  //   } else if (this.priceRange !== undefined && this.priceRange !== "" && this.settings.prices) {
  //     this.displayPriceRange = true;
  //   }
  // }

}
