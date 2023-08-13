import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishQuestionComponent } from './dish-question.component';

describe('DishQuestionComponent', () => {
  let component: DishQuestionComponent;
  let fixture: ComponentFixture<DishQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishQuestionComponent]
    });
    fixture = TestBed.createComponent(DishQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
