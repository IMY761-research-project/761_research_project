import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMainHomeComponent } from './maps-main-home.component';

describe('MapsMainHomeComponent', () => {
  let component: MapsMainHomeComponent;
  let fixture: ComponentFixture<MapsMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsMainHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
