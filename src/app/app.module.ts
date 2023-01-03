import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { CardsComponent } from './product-area/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { MyProductPickerComponent } from './my-product-picker/my-product-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAreaComponent,
    CardsComponent,
    MyProductPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
