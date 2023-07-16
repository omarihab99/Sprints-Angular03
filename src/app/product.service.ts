import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      name: "Nikon Camera",
      image: "../../../assets/product-1.jpg",
      price: 2000,
      isAvailable: true
    },
    {
      name: "Blue T-Shirt",
      image: "../../../assets/product-2.jpg",
      price: 250,
      isAvailable: true
    },
    {
      name: "White Lamp",
      image: "../../../assets/product-3.jpg",
      price: 500,
      isAvailable: true
    },
    {
      name: "Black Nike",
      image: "../../../assets/product-4.jpg",
      price: 300,
      isAvailable: false
    },
    {
      name: "Drone",
      image: "../../../assets/product-5.jpg",
      price: 3000,
      isAvailable: false
    },
    {
      name: "Huawei Watch",
      image: "../../../assets/product-6.jpg",
      price: 950,
      isAvailable: false
    },
    {
      name: "Black Blouse",
      image: "../../../assets/product-7.jpg",
      price: 160,
      isAvailable: true
    },
    {
      name: "Some Creams",
      image: "../../../assets/product-8.jpg",
      price: 60,
      isAvailable: false
    }
  ];
  constructor() { }
  public getProducts(): Product[] {
      return this.products;
  }
  public getAvailableProducts(): Product[] {
    return this.products.filter(product => product.isAvailable);
  }
  public getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.isFeatured);
  }
}
