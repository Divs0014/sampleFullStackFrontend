import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private productService: ProductService) {}
  @Input() productJson: any = {
    id: 'prod_organic_001',
    name: 'Organic Fresh Apples',
    category: 'Fruits',
    price: 180,
    discountPrice: 150,
    currency: 'INR',
    unit: '1 kg',
    image: {
      url: 'https://cdn.organicstore.com/products/apple.jpg',
      alt: 'Fresh organic apples',
    },
    badges: ['Organic', 'Fresh'],
    rating: 4.6,
    reviewsCount: 124,
    inStock: true,
  };

  isInCart(): boolean {
    return this.productService
      .cart()
      .some((item) => item.id === this.productJson.id);
  }

  getQuantity(): number {
    return (
      this.productService.cart().find((item) => item.id === this.productJson.id)
        ?.quantity ?? 1
    );
  }

  addToCart() {
    const { id, name, price } = this.productJson;
    this.productService.addToCart({ id, name, price, quantity: 1 });
  }

  removeFromCart() {
    this.productService.removeFromCart(this.productJson.id);
  }

  incrementQuantity() {
    this.productService.updateCartQuantity(
      this.productJson.id,
      this.getQuantity() + 1
    );
  }

  decrementQuantity() {
    const qty = this.getQuantity();

    if (qty > 1) {
      this.productService.updateCartQuantity(this.productJson.id, qty - 1);
    } else {
      this.productService.removeFromCart(this.productJson.id);
    }
  }
}
