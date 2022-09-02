import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkResponseModel } from '../models/linkResponseModel';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = 'https://localhost:7275/api/products/getall';
  constructor(private httpclient: HttpClient) { }

  getProducts():Observable<LinkResponseModel<Product>>{
    return this.httpclient.get<LinkResponseModel<Product>>(this.apiURL)
  }
  
}
