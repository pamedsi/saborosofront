import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/container/container.component';
import { MenuItemComponent } from './Components/menu-item/menu-item.component';
import {NgOptimizedImage} from "@angular/common";
import { MenuComponent } from './Components/menu/menu.component';
import { DishComponent } from './Components/dish/dish.component';
import { DishListComponent } from './Components/dish-list/dish-list.component';
import {FormsModule} from "@angular/forms";
import { AddressGetterComponent } from './Components/address-getter/address-getter.component';
import { NumberOfDishesComponent } from './Components/number-of-dishes/number-of-dishes.component';
import { ContactGetterComponent } from './Components/contact-getter/contact-getter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MenuItemComponent,
    MenuComponent,
    DishComponent,
    DishListComponent,
    AddressGetterComponent,
    NumberOfDishesComponent,
    ContactGetterComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
