import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers:[SwipeService]
})
export class HomeComponent implements OnInit {
  selectedProduct:any;
  products=
  [
     {
      features:[
        {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70"},
        {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5"},
        {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC"},
      ], 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/bag1.png"}],
      price:50432,
      categories:[],
      isHighlight:false,
      url:"../../../assets/images/bag1.png"
    },
    { features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70"},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5"},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC"},
    ], 
      name:"Juice Juicy",
      code:"Y623201",
      description:"",
      images:[{url:"../../../assets/images/bag2.png"}],
      price:70432,
      categories:[],
      isHighlight:false,
      url:"../../../assets/images/bag2.png"
    },
    { 
      features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70"},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5"},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC"},
    ], 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/bag3.png"}],
      price:80432,
      categories:[],
      isHighlight:false,
      url:"../../../assets/images/bag3.png"
    },
    {
      features:[
        {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70"},
        {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5"},
        {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC"},
      ], 
      name:"Beauty Product",
      code:"Y523201",
      description:"",
      images:[{url:"../../../assets/images/bag4.png"}],
      price:90432,
      categories:[],
      isHighlight:false,
      url:"../../../assets/images/bag5.png"
    },
  ]
  constructor() { }
  slide(evt){
    // console.log(evt);
   this.selectedProduct= this.products[evt];
  }

  ngOnInit(): void {
  }
  hoverListItem(item:Product) {
    item.isHighlight = ! item.isHighlight;
 }

}
