import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productresponsemodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiURL = 'https://localhost:7275/api/products/getall';
  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.httpclient
      .get<ProductResponseModel>(this.apiURL)
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
