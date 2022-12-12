import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductType } from 'src/app/models/ProductType';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  currentImgUrl="";
  constructor() { 

  }
  
  ngOnInit(): void {
      this.product= { 
        reviewCount:50,
        _id:"uuuu",
         createdAt:new Date(),
          updatedAt:new Date(),
      summary:"",
      specialPrice:800,
      rating:3.0,
      productType:ProductType.Digital,
      features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      ] , 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"All frames constructed with hardwood solids and laminates",
      images:[
        {url:"../../../assets/images/bag3.png",position:1,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:2,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:5,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:4,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:3,_id:"8999",createdAt:new Date(),updatedAt:new Date()}
      ],
      price:80432,
      categories:[],
      isHighlight:false,
      url:'../../../assets/images/bag3.png',
      similarProducts:[
    { 
        reviewCount:50,
        _id:"uuuu",
         createdAt:new Date(),
          updatedAt:new Date(),
      summary:"",
      specialPrice:800,
      rating:3.0,
      productType:ProductType.Digital,
      features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      ] , 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"All frames constructed with hardwood solids and laminates",
      images:[
        {url:"../../../assets/images/bag3.png",position:1,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:2,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:5,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:4,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:3,_id:"8999",createdAt:new Date(),updatedAt:new Date()}
      ],
      price:80432,
      categories:[],
      isHighlight:false,
      url:'../../../assets/images/bag3.png',
      similarProducts:[

      ]
    },
    { 
        reviewCount:50,
        _id:"uuuu",
         createdAt:new Date(),
          updatedAt:new Date(),
      summary:"",
      specialPrice:800,
      rating:3.0,
      productType:ProductType.Digital,
      features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      ] , 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"All frames constructed with hardwood solids and laminates",
      images:[
        {url:"../../../assets/images/bag3.png",position:1,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:2,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:5,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:4,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:3,_id:"8999",createdAt:new Date(),updatedAt:new Date()}
      ],
      price:80432,
      categories:[],
      isHighlight:false,
      url:'../../../assets/images/bag3.png',
      similarProducts:[

      ]
    },
    { 
        reviewCount:50,
        _id:"uuuu",
         createdAt:new Date(),
          updatedAt:new Date(),
      summary:"",
      specialPrice:800,
      rating:3.0,
      productType:ProductType.Digital,
      features:[
      {description:"All frames constructed with hardwood solids and laminates",colorCode:"#F52B70",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",colorCode:"#2B2BF5",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      {description:"Arms, backs and seats are structurally reinforced",colorCode:"#2BF5CC",_id:"8999",createdAt:new Date(),updatedAt:new Date()},
      ] , 
      name:"Sally Fanny pack",
      code:"Y523201",
      description:"All frames constructed with hardwood solids and laminates",
      images:[
        {url:"../../../assets/images/bag3.png",position:1,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:2,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:5,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:4,_id:"8999",createdAt:new Date(),updatedAt:new Date()},
        {url:"../../../assets/images/bag3.png",position:3,_id:"8999",createdAt:new Date(),updatedAt:new Date()}
      ],
      price:80432,
      categories:[],
      isHighlight:false,
      url:'../../../assets/images/bag3.png',
      similarProducts:[

      ]
    }
      ]
    };
    this.currentImgUrl=this.product.images[0].url;
  }
  
}
