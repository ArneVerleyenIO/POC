import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNgxsComponent } from './home-ngxs.component';

describe('HomeNgxsComponent', () => {
  let component: HomeNgxsComponent;
  let fixture: ComponentFixture<HomeNgxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNgxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
