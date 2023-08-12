import { Component } from '@angular/core';
import {FieldType} from "../container/container.component";

@Component({
  selector: 'app-adress-getter',
  templateUrl: './adress-getter.component.html',
  styleUrls: ['./adress-getter.component.css']
})
export class AdressGetterComponent {

    protected readonly FieldType = FieldType;
}
