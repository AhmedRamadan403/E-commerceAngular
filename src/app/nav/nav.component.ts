import { Component } from '@angular/core';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { FavoriteProductComponent } from '../favorite-product/favorite-product.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [ProductCartComponent,FavoriteProductComponent,RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
