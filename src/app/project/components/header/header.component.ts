import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: String | undefined;
  @Input() picture: String | undefined;
  @Input() industry: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
