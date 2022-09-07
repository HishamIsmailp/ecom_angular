import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartProducts: any = [];
  constructor() {}

  addProductToCart(prod: any) {
    // if() {
    //  return of({
    //     id_token:'ddfdsfsfs'
    //   })
    // }
    this.cartProducts.push(prod);
  }
  
  getCartProducts() {
    return this.cartProducts;
  }
  // deleteCartData(id:any){
  //   var data = this.cartProducts.filter((singleData:any)=>{
  //     return singleData.id !==id
  //   })
  //   this.cartProducts=data;
  //   console.log(data);
  //   this.loadCart();
  // }
}
