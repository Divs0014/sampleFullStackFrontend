import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
      private _cart=signal<any[]>([]);
      public  cart =this._cart.asReadonly();
      
      addToCart(product:any){
        this._cart.update((data)=>{
          return [...data,product];
        })
      }
      removeFromCart(productId:string){
        this._cart.update((data)=>{
          return data.filter(item=>item.id !== productId);
        })
      }
      updateCartQuantity(poductId:any,quantity: number){
        this._cart.update((data)=>{
          return data.map(item=>{
            if(item.id === poductId){
              return {...item,quantity:quantity};
            }
            return item;
          })
        })
      }
     totalSum = computed(() =>
      this._cart().reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    );

      totalItems():number{
        return this._cart().length;
      }
    
}
