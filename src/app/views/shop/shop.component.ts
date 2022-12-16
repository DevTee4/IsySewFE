import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  selectedItem = ""
  products =
    [
      {
        name: "Sally Fanny pack",
        code: "Y523201",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag1.png" }],
        price: 50432,
        categories: [],
        isHighlight: false

      },
      {
        name: "Juice Juicy",
        code: "Y623203",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag2.png" }],
        price: 70432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Sally Fanny pack",
        code: "Y523205",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag3.png" }],
        price: 80432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Beauty Product",
        code: "Y523207",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag4.png" }],
        price: 90432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Beauty Product",
        code: "Y523202",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag5.png" }],
        price: 90432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Beauty Product",
        code: "Y523204",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag3.png" }],
        price: 90432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Beauty Product",
        code: "Y523206",
        description: "",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        images: [{ url: "../../../assets/images/bag1.png" }],
        price: 90432,
        categories: [],
        isHighlight: false
      },
      {
        name: "Beauty Product",
        code: "Y523208",
        features: [
          { description: "All frames constructed with hardwood solids and laminates", colorCode: "#F52B70" },
          { description: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails", colorCode: "#2B2BF5" },
          { description: "Arms, backs and seats are structurally reinforced", colorCode: "#2BF5CC" },
        ],
        description: "",
        images: [{ url: "../../../assets/images/bag5.png" }],
        price: 90432,
        categories: [],
        isHighlight: false
      },
    ]
    constructor(private router: Router) { }

  ngOnInit(): void {
  }
  hoverListItem(item: Product) {
    item.isHighlight = !item.isHighlight;
  }
  showProductDetails() {
    this.router.navigate(['/product-details']);
  }
 productOnclick(product:Product){
    console.log(product)
    this.router.navigate(['/product-details']);

  }
  
}
