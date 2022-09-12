import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkResponseModel } from '../models/linkResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = 'https://localhost:7275/api/';
  constructor(private httpclient: HttpClient) { }

  getProducts():Observable<LinkResponseModel<Product>>{
    let newPath=this.apiURL+"products/getall"
    return this.httpclient.get<LinkResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<LinkResponseModel<Product>>{
    let newPath=this.apiURL+"products/getbycategory?categoryId="+categoryId
    return this.httpclient.get<LinkResponseModel<Product>>(newPath)
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpclient.post<ResponseModel>(this.apiURL+"products/add",product)
  }
  
}
