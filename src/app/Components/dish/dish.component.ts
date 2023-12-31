import { Component, Input } from '@angular/core';
import { FieldType } from "../container/container.component";
import { TypeOfQuestion } from "../dish-question/dish-question.component";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  @Input() id: number
  isFull = true
  protected readonly FieldType = FieldType;
  protected readonly TypeOfQuestion = TypeOfQuestion;
}
