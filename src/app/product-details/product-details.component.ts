import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interface/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productService = inject(ProductServiceService)
  activeRoue = inject(ActivatedRoute)
  productId : any 
  Product! : IProduct
  constructor(){
    this.activeRoue.paramMap.subscribe(param=> this.productId = param.get('id'))
    this.productService.getProductById(this.productId).subscribe(p=>this.Product =p)
  }
}
