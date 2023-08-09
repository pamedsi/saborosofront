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
}
