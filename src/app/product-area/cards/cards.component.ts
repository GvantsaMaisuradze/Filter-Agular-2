import { Component, Input, OnInit } from '@angular/core';
import { type } from 'os';
import { Product, ProductType } from 'src/app/model/product.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()
  product:Product = new Product("","","",0,ProductType.Animals);
  constructor() { }

  ngOnInit(): void {
  }

}
