import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './product/list-product.component';
import { DatailProductComponent } from './product/datail-product.component';
import { NewProductComponent } from './product/new-product.component';
import { UpdateProductComponent } from './product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DatailProductComponent,
    NewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
