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
import { AdressGetterComponent } from './Components/adress-getter/adress-getter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MenuItemComponent,
    MenuComponent,
    DishComponent,
    DishListComponent,
    AdressGetterComponent,
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
