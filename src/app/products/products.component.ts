import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product }  from 'src/app/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  private products!: Product[];
  
  featured: number;
  avaliableCount: number;
  all: number;
  filter = "All"
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.featured = 0;
    this.avaliableCount = 0;
    this.all = this.products.length;
    this.setCounts();
  }
  public getProducts(): Product[] {
    if(this.filter === "Featured") return this.productService.getFeaturedProducts();
    else if(this.filter === "Avaliable") return this.productService.getAvailableProducts();
    return this.products;
  }
  private setCounts():void{
    this.products.forEach((product)=>{
      if(product.isFeatured) this.featured++;
      if(product.isAvailable) this.avaliableCount++;

    });
  }

  onFilterChanged(selectedFilter:string){
    console.log('item',selectedFilter)
    this.filter = selectedFilter;
  }
  // shouldBeViewed(product:Product):boolean{

  //   if(this.filter =="All")return true;
  //   if(this.filter =="Avaliable" && product.isAvailable) return true;
  //   if(this.filter =="Featured" && product.isFeatured) return true;
  //   return false;
  // }
}
