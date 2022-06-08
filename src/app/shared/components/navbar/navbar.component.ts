import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayMenu: boolean = false;
  name: string = 'Name';
  surName: string = 'Surname';

  profilePicture: string = '../../../../assets/test-img/dummy-img.png';

  constructor() {
  }

  toggleMenu () {
    this.displayMenu = !this.displayMenu;
  }

  ngOnInit(): void {
  }

}
