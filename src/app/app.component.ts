import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from "./favourite/favourite.component";
import {Product} from "./product/product.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  post={
    title:'Title of the Post',
    isFavourite:true
  }

  tweet:  { content:string,
            isLiked:boolean,
            likesCount:number
          }={
              content:'this is content of the tweet',
              isLiked:true,
              likesCount:10
            }



  onFavouriteChange(eventArgs:FavouriteChangedEventArgs) {
    console.log('Favourite Changed',eventArgs );
  }

  AddProduct() {
    this.productList.push({category: 'Clothing', name: "Hoodie", price: "$7.64", quantity: 90});
  }

  productList=this.getProductList();

  getProductList():Product[]{
    return [{
      "name": "Jeans",
      "price": "$7.64",
      "quantity": 89,
      "category": "Clothing"
    }, {
      "name": "Jeans",
      "price": "$8.02",
      "quantity": 70,
      "category": "Beauty"
    }, {
      "name": "Headphones",
      "price": "$0.88",
      "quantity": 79,
      "category": "Toys"
    }, {
      "name": "T-shirt",
      "price": "$2.73",
      "quantity": 67,
      "category": "Sports"
    }, {
      "name": "Sneakers",
      "price": "$7.86",
      "quantity": 92,
      "category": "Sports"
    }, {
      "name": "Phone case",
      "price": "$7.77",
      "quantity": 95,
      "category": "Sports"
    }, {
      "name": "Phone case",
      "price": "$3.08",
      "quantity": 98,
      "category": "Clothing"
    }, {
      "name": "T-shirt",
      "price": "$8.90",
      "quantity": 94,
      "category": "Toys"
    }, {
      "name": "Backpack",
      "price": "$8.98",
      "quantity": 52,
      "category": "Clothing"
    }, {
      "name": "Sneakers",
      "price": "$8.45",
      "quantity": 59,
      "category": "Beauty"
    }];
  }
}
