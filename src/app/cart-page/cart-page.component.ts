import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cartService/cart-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartData:any[]=[]
  totalPrice:number=0
  constructor(private cartService:CartServiceService,private router: Router) { }
  ngOnInit(): void {
    this.loadCart();
  }
  loadCart() {
    this.cartData=this.cartService.getCartProducts();
    this.calculatePrice()
  }
  deleteCartData(id:any){
    let data = this.cartService.cartProducts.filter((singleData:any)=>{
      return singleData.id !==id
    })
    this.cartService.cartProducts=data;
    console.log(data);
    this.loadCart();
  }
  // delCartData(){
  //   this.cartService.deleteCartData(id)
  //}
  calculatePrice(){
    this.totalPrice=0
   for(let singlePrice of this.cartData){
      this.totalPrice=this.totalPrice+Number(singlePrice.price)
   }
  }
  continueShopping(){
    this.router.navigate(['../productsList'])
  }
}

