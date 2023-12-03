import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // listOfProducts: Product[] = [];
  @Input('listOfProducts')listOfProducts: Product[] = [];

  removeProduct(product: Product) {
   let index= this.listOfProducts.indexOf(product)
    this.listOfProducts.splice(index,1)
  }
}

export interface Product{
  name:string;
  price:string;
  quantity:number;
  category:ProductCategory;
}

type ProductCategory ='Electronics'|'Books'|'Beauty'|'Clothing'|'Jewellery'|'Toys'|'Sports'
