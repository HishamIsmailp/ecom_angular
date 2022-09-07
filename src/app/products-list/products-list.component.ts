import { Component, OnInit } from '@angular/core';
import { productList } from '../models/productList';
import { EcomServicesService } from '../services/ecom-services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:productList[]=[];
  constructor(private ecomService: EcomServicesService) { }

  ngOnInit(): void {
    this.loadProductsLists()
  }
  loadProductsLists(){
  this.ecomService.getProducts().subscribe((data:any)=>{
    this.products=data;
  })
}


}
