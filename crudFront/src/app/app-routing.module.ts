import { UpdateProductComponent } from './product/update-product.component';
import { NewProductComponent } from './product/new-product.component';
import { ListProductComponent } from './product/list-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './product/detail-product.component';

//externo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {path: '', component: ListProductComponent },
  {path: 'detail/:id', component: DetailProductComponent},
  {path: 'new', component: NewProductComponent},
  {path: 'update/:id', component: UpdateProductComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
