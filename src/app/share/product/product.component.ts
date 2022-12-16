import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') item:any;
   @Output('productOnclick') newItemEvent = new EventEmitter<any>();

  productOnclick() {
    this.newItemEvent.emit(this.item);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
