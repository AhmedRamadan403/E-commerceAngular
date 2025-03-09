import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';

@Component({
  selector: 'app-favorite-product',
  imports: [],
  templateUrl: './favorite-product.component.html',
  styleUrl: './favorite-product.component.css'
})
export class FavoriteProductComponent {
 ProductService = inject(ProductServiceService)
  FavProducts = this.ProductService.FavProductSignal();

  RemoveFromCart(product : any){
    let index  = this.FavProducts.indexOf(product)
    this.FavProducts.splice(index,1);
  }
}
