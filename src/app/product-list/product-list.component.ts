import { Component, ContentChild, ElementRef, inject } from '@angular/core';
import { ProductcardComponent } from '../productcard/productcard.component';
import { ProductServiceService } from '../../Services/product-service.service';
import { IProduct } from '../interface/iproduct';
import { SearchArrayPipe } from '../Pipes/search-array.pipe';

@Component({
  selector: 'app-product-list',
  imports: [ProductcardComponent,SearchArrayPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
ProductService = inject(ProductServiceService)
Products : IProduct[] = [] 
 constructor(){
this.ProductService.getAllProducts().subscribe(p=>{
  this.Products = p.products
});
 }
}
