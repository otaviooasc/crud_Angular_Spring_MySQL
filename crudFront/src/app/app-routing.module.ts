import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//externo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
