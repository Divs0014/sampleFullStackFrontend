import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
   constructor(
    public  productService : ProductService
   )
   {}

  cartTotal:any;
   ngOnInit(): void {
    //  this.calcTotal();
   }
   
  //  calcTotal(){
  //   this.cartTotal = this.productService.totalSum();
  //   console.log(this.cartTotal);
  //  }
   getCartItems(){
    return this.productService.cart();
   }
   increment(item:any){
    this.productService.updateCartQuantity(item.id,item.quantity + 1);
    
   }
   decrement(item:any){
    if(item.quantity > 1){
      this.productService.updateCartQuantity(item.id,item.quantity - 1);
    }else{
      this.productService.removeFromCart(item.id);
    }
     
  }
}
