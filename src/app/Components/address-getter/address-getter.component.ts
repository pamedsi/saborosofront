import { Component } from '@angular/core';
import { FieldType } from "../container/container.component";

@Component({
  selector: 'app-address-getter',
  templateUrl: './address-getter.component.html',
  styleUrls: ['./address-getter.component.css']
})
export class AddressGetterComponent {

    protected readonly FieldType = FieldType;
}
