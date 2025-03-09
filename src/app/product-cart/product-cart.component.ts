import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  ProductService = inject(ProductServiceService)
  CartProducts = this.ProductService.CartProductSignal();

  RemoveFromCart(product : any){
    let index  = this.CartProducts.indexOf(product)
    this.CartProducts.splice(index,1);
  }
}
