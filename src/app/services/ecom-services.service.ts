import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcomServicesService {
  API_BASE_URL='https://fakestoreapi.com'
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.API_BASE_URL}/products`)
  }

  getProduct(prodId:string){
   return this.http.get(`${this.API_BASE_URL}/products/${prodId}`)
  }
}
