import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGetterComponent } from './contact-getter.component';

describe('ContactGetterComponent', () => {
  let component: ContactGetterComponent;
  let fixture: ComponentFixture<ContactGetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactGetterComponent]
    });
    fixture = TestBed.createComponent(ContactGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
