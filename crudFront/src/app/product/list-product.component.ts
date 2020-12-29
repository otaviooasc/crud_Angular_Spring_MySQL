import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../service/-product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  product: Product[] = [];
  constructor(private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.uploadProduct();
  }

  uploadProduct(): void { 
    this.productService.list().subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(id: number) { 
    this.productService.delete(id).subscribe(
      data => {
        this.toastr.success('Deleted product!', 'Ok', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.uploadProduct();
      },
      err =>{
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
