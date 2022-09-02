import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { LinkResponseModel } from '../models/linkResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL = 'https://localhost:7275/api/categories/getall';
  constructor(private httpclient:HttpClient) { }

  
  getCategories():Observable<LinkResponseModel<Category>>{
    return this.httpclient.get<LinkResponseModel<Category>>(this.apiURL)
  }
}
