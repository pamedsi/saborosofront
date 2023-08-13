import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressGetterComponent } from './address-getter.component';

describe('AdressGetterComponent', () => {
  let component: AdressGetterComponent;
  let fixture: ComponentFixture<AdressGetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressGetterComponent]
    });
    fixture = TestBed.createComponent(AdressGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
