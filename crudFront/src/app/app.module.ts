import { NgModule } from '@angular/core';
import { ListProductComponent } from './product/list-product.component';
import { DetailProductComponent } from './product/detail-product.component';
import { NewProductComponent } from './product/new-product.component';
import { UpdateProductComponent } from './product/update-product.component';

//externa
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailProductComponent,
    NewProductComponent,
    UpdateProductComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
