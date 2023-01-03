import { Component, OnInit } from '@angular/core';
import { Product, ProductType } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {
  url:string ='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
  renderProductList:Product[] =[];
  productsList:Product[]=[
    new Product(this.url,'work space','some description',2000,ProductType.Tech),
    new Product(this.url,'work space','some description',2000,ProductType.Tech),
    new Product(this.url,'work space','some description',2000,ProductType.Tech),
    new Product(this.url,'Mercedes','car',200000000,ProductType.Cars),
    new Product(this.url,'Jeep','car',200000,ProductType.Cars),
    new Product(this.url,'squirrels','squirrels',1000,ProductType.Animals),
    new Product(this.url,'grapes','fruits',30,ProductType.Food),
    new Product(this.url,'Banana','fruits',25,ProductType.Food),
  ];
  constructor(private productService:ProductService) {
    this.renderProductList = this.productsList
  }

  ngOnInit(): void {
    this.productService.productTypeEmitter.subscribe((response:any)=>{
      if(response>=0)
    this.renderProductList = this.productsList.filter(o=>o.type == response)
    else{
      this.renderProductList = this.productsList
    }
  })
  }

}
