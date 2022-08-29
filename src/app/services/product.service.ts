import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = 'https://localhost:7275/api/products/getall';
  constructor(private httpclient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpclient.get<ProductResponseModel>(this.apiURL)
  }
}
