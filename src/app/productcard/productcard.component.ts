import { Component, inject, input } from '@angular/core';
import { IProduct } from '../interface/iproduct';
import { ProductServiceService } from '../../Services/product-service.service';
import { Router } from '@angular/router';
import { ShadowDirective } from '../directive/shadow.directive';
import { CurrencyPipe } from '@angular/common';
import { SliceProductPipe } from '../Pipes/slice-product.pipe';

@Component({
  selector: 'app-productcard',
  imports: [ShadowDirective,CurrencyPipe,SliceProductPipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
Product = input.required<IProduct>()

ProductService = inject(ProductServiceService)
router =inject(Router) 


ChangeVisablity(ele : HTMLElement){
  ele.style.display ='' 
}
ReturnStyle(ele : HTMLElement){
  ele.style.display ='none' 
}
AddToCart(Product : IProduct){
  this.ProductService.AddToCart(Product);
}
AddToFav(Product : IProduct){
  this.ProductService.AddToFav(Product);
}
RedirectToDetails(id : number){
  this.router.navigate(['ProductDit',id])
}
}
