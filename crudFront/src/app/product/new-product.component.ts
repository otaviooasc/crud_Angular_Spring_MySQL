import { Product } from './../models/product';
import { ProductService } from './../service/-product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name: string = '';
  price: number = null;

  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const product = new Product(this.name, this.price);
    this.productService.save(product).subscribe(
      data => {
        this.toastr.success('Created product!', 'Ok', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    )
  }
}