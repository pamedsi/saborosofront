import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() pic: string;
  @Input() title: string;
  @Input() priceG: string = "20";
  @Input() priceP: string = "15";
}
