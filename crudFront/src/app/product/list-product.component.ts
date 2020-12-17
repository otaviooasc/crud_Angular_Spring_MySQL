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
  constructor(private productService: ProductService) { }

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

}
