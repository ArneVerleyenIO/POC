import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() switchId: string = '';
  @Input() switchValue : boolean = false;
  @Output() switchOn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  checkSwitch () {
    const switchElement = <HTMLInputElement>document.getElementById(this.switchId);
    if (switchElement.checked) {
      this.switchOn.emit({
        value: true,
        id: this.switchId
      });
    } else if (!switchElement.checked) {
      this.switchOn.emit({
        value: false,
        id: this.switchId
      });
    }
  }


}
