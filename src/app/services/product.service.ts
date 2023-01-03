import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productTypeEmitter:EventEmitter<number> = new EventEmitter();
  
  constructor() { }
}
