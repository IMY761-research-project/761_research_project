import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAddressesComponent } from './previous-addresses.component';

describe('PreviousAddressesComponent', () => {
  let component: PreviousAddressesComponent;
  let fixture: ComponentFixture<PreviousAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
