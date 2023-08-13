import { Component, Input } from '@angular/core';

export enum FieldType {
  Text = 'text',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Select = 'select',
  TextArea = 'textarea',
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  public generateNumberOptions(numberOptions: number): number[] {
    return Array.from({ length: numberOptions + 1 }, (_, i) => i);
  }
}
