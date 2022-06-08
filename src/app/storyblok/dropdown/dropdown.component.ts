import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @Input() values: [] | undefined;

  ngOnInit(): void {
  }

  ngOnChanges () {
    console.log(this.values);
  }

}
