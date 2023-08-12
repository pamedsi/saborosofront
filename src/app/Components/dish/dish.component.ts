import { Component, Input } from '@angular/core';
import { FieldType } from "../container/container.component";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  @Input() id: string
  protected readonly FieldType = FieldType;
}
