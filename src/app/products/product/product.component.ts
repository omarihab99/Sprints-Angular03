import { Component, Inject, Input } from "@angular/core";
import { Product } from "src/app/product";
@Component(
    {
        selector: "productItem-root",
        templateUrl: "./product.component.html",
        styleUrls: ["./product.component.scss"]
    }
    )
export class ProductItemComponent {
    @Input() productItem: Product;
    @Input() products!: Product[];
    constructor(){
        this.productItem = {};
    }

    largerThan100(product: Product){
      return product.price ? product.price > 100 : false;
    }


}

