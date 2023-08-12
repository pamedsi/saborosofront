import { Component } from '@angular/core';
import {FieldType} from "./Components/container/container.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saborosofront';
  protected readonly FieldType = FieldType;
  public numberOfDishes: string = "0";
  onSelectChange(event: Event) {
    this.numberOfDishes = String(+(event.target as HTMLSelectElement).value);
  }

  protected readonly Number = Number;
  protected readonly String = String;
}
