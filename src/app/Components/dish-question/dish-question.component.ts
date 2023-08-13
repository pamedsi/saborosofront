import { Component, Input } from '@angular/core';

export enum TypeOfQuestion {
  dishSize = "dish-size",
  protein = "protein",
  isFull = "is-full",
  accompaniments = "accompaniments",
  additional = "additional",
  obs="obs"
}

@Component({
  selector: 'app-dish-question',
  templateUrl: './dish-question.component.html',
  styleUrls: ['./dish-question.component.css']
})
export class DishQuestionComponent {
  @Input() question: string
  @Input() typeOfQuestion: TypeOfQuestion
  @Input() id: number
  isFull = true;
  protected readonly TypeOfQuestion = TypeOfQuestion;
}
