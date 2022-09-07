import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../services/cartService/cart-service.service';
import { EcomServicesService } from '../services/ecom-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ecomService: EcomServicesService,
    private cartData: CartServiceService,
    private router: Router
  ) {}
  productId: string | null = '';
  productData: any = {};
  addProduct() {
    this.cartData.addProductToCart({ ...this.productData });
    this.router.navigate(['../cart']);
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId != null) {
      this.ecomService.getProduct(this.productId).subscribe((data) => {
        this.productData = data;
      });
    }
  }
}
