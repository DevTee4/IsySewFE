import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products=
  [
     {
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/side-bag.png"}],
      price:50432,
      categories:[],
      isHighlight:false

    },
    {
      name:"Juice Juicy",
      code:"Y623201",
      description:"",
      images:[{url:"../../../assets/images/side-bag.png"}],
      price:70432,
      categories:[],
      isHighlight:false
    },
    {
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/side-bag.png"}],
      price:80432,
      categories:[],
      isHighlight:false
    },
    {
      name:"Beauty Product",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/side-bag.png"}],
      price:90432,
      categories:[],
      isHighlight:false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  hoverListItem(item:Product) {
    item.isHighlight = ! item.isHighlight;
 }

}
