import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() frameworkId = new EventEmitter();

  frameworks: string[] = ['React', 'Angular'];

  constructor() { }

  ngOnInit(): void {
  }


  checkFrameworks (id: string) {
    this.frameworks.forEach((framework) => {
      const frameworkCheckbox = <HTMLInputElement>document.getElementById(framework);
      if (frameworkCheckbox.checked && frameworkCheckbox.id !== id) {
        frameworkCheckbox.checked = false;
      }
      else if (frameworkCheckbox.checked && frameworkCheckbox.id === id) {
        this.frameworkId.emit(id);
      }
      else if (!frameworkCheckbox.checked && frameworkCheckbox.id === id) {
        this.frameworkId.emit(null);
      };
    });
  }
}
