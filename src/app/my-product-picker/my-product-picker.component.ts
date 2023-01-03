import { Component, OnInit } from '@angular/core';
import { ProductType } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-my-product-picker',
  templateUrl: './my-product-picker.component.html',
  styleUrls: ['./my-product-picker.component.css']
})
export class MyProductPickerComponent implements OnInit {
  productTypes:any[]=[
    {type: -1,text:"All"},
    {type:ProductType.Animals,text:"Animals"},
    {type:ProductType.Cars,text:"Cars"},
    {type:ProductType.Tech,text:"Tech"},
    {type:ProductType.Family,text:"Family"},
    {type:ProductType.Food,text:"Food"},
  ]

  selectData:any;
  constructor(private productService:ProductService) { }

  selectValueChange(){
    console.log(this.selectData);
    this.productService.productTypeEmitter.emit(this.selectData)
  }

  ngOnInit(): void {
  }

}
