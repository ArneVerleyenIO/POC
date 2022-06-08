import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input() campus_location: string | undefined;

  @Input() header_title_1: string | undefined;
  @Input() header_title_2: string | undefined;

  @Input() paragraph_1: string | undefined;
  @Input() paragraph_2: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
