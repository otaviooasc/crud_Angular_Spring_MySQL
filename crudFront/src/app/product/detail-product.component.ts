import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../service/-product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: Product = null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.detail(id).subscribe(
      data =>{
        this.product = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut:3000, positionClass: 'toast-top-center',
        });
        this.onDetail();
      }
    );
  }

  onDetail(): void{
    this.router.navigate(['/']);
  }
}
