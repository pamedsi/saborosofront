import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {
  @Input() numberOfDishes: string
  listLength(lengthOfArray: string): number[] {
    return Array.from({length: Number(lengthOfArray)}, (_, i) => i + 1)
  }

  protected readonly Number = Number;
}
