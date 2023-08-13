import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfDishesComponent } from './number-of-dishes.component';

describe('NumberOfDishesComponent', () => {
  let component: NumberOfDishesComponent;
  let fixture: ComponentFixture<NumberOfDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberOfDishesComponent]
    });
    fixture = TestBed.createComponent(NumberOfDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
