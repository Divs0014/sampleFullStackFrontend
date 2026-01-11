import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product',
  imports: [
    CardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    CartComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})

export class ProductComponent {
   constructor(
    public productService :ProductService
   ) {}
  isProducts: boolean = true;
  openCartDialog: boolean = false;
  products = [
    {
      id: 'prod_001',
      name: 'Organic Whole Wheat Atta',
      category: 'Grains',
      price: 480,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/wheat-atta.jpg',
      inStock: true,
    },
    {
      id: 'prod_002',
      name: 'Organic Multigrain Flour',
      category: 'Grains',
      price: 520,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/multigrain.jpg',
      inStock: true,
    },
    {
      id: 'prod_003',
      name: 'Organic Basmati Rice',
      category: 'Grains',
      price: 780,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/basmati.jpg',
      inStock: true,
    },
    {
      id: 'prod_004',
      name: 'Organic Brown Rice',
      category: 'Grains',
      price: 650,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/brown-rice.jpg',
      inStock: true,
    },
    {
      id: 'prod_005',
      name: 'Raw Organic Forest Honey',
      category: 'Honey',
      price: 599,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/forest-honey.jpg',
      inStock: true,
    },
    {
      id: 'prod_006',
      name: 'Organic Mustard Honey',
      category: 'Honey',
      price: 549,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/mustard-honey.jpg',
      inStock: true,
    },
    {
      id: 'prod_007',
      name: 'Organic Moong Dal',
      category: 'Pulses',
      price: 320,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/moong-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_008',
      name: 'Organic Toor Dal',
      category: 'Pulses',
      price: 360,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/toor-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_009',
      name: 'Organic Chana Dal',
      category: 'Pulses',
      price: 290,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/chana-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_010',
      name: 'Organic Red Lentils (Masoor)',
      category: 'Pulses',
      price: 310,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/masoor-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_011',
      name: 'Organic Jowar Flour',
      category: 'Grains',
      price: 280,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/jowar-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_012',
      name: 'Organic Bajra Flour',
      category: 'Grains',
      price: 260,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/bajra-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_013',
      name: 'Organic Ragi Flour',
      category: 'Grains',
      price: 300,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/ragi-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_014',
      name: 'Organic Sesame Seeds',
      category: 'Seeds',
      price: 220,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/sesame.jpg',
      inStock: true,
    },
    {
      id: 'prod_015',
      name: 'Organic Groundnut Oil (Cold Pressed)',
      category: 'Oils',
      price: 720,
      currency: 'INR',
      unit: '1 L',
      image: 'https://cdn.organicstore.com/products/groundnut-oil.jpg',
      inStock: true,
    },
  ];
   productstemp = [
    {
      id: 'prod_001',
      name: 'Organic Whole Wheat Atta',
      category: 'Grains',
      price: 480,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/wheat-atta.jpg',
      inStock: true,
    },
    {
      id: 'prod_002',
      name: 'Organic Multigrain Flour',
      category: 'Grains',
      price: 520,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/multigrain.jpg',
      inStock: true,
    },
    {
      id: 'prod_003',
      name: 'Organic Basmati Rice',
      category: 'Grains',
      price: 780,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/basmati.jpg',
      inStock: true,
    },
    {
      id: 'prod_004',
      name: 'Organic Brown Rice',
      category: 'Grains',
      price: 650,
      currency: 'INR',
      unit: '5 kg',
      image: 'https://cdn.organicstore.com/products/brown-rice.jpg',
      inStock: true,
    },
    {
      id: 'prod_005',
      name: 'Raw Organic Forest Honey',
      category: 'Honey',
      price: 599,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/forest-honey.jpg',
      inStock: true,
    },
    {
      id: 'prod_006',
      name: 'Organic Mustard Honey',
      category: 'Honey',
      price: 549,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/mustard-honey.jpg',
      inStock: true,
    },
    {
      id: 'prod_007',
      name: 'Organic Moong Dal',
      category: 'Pulses',
      price: 320,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/moong-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_008',
      name: 'Organic Toor Dal',
      category: 'Pulses',
      price: 360,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/toor-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_009',
      name: 'Organic Chana Dal',
      category: 'Pulses',
      price: 290,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/chana-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_010',
      name: 'Organic Red Lentils (Masoor)',
      category: 'Pulses',
      price: 310,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/masoor-dal.jpg',
      inStock: true,
    },
    {
      id: 'prod_011',
      name: 'Organic Jowar Flour',
      category: 'Grains',
      price: 280,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/jowar-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_012',
      name: 'Organic Bajra Flour',
      category: 'Grains',
      price: 260,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/bajra-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_013',
      name: 'Organic Ragi Flour',
      category: 'Grains',
      price: 300,
      currency: 'INR',
      unit: '1 kg',
      image: 'https://cdn.organicstore.com/products/ragi-flour.jpg',
      inStock: true,
    },
    {
      id: 'prod_014',
      name: 'Organic Sesame Seeds',
      category: 'Seeds',
      price: 220,
      currency: 'INR',
      unit: '500 g',
      image: 'https://cdn.organicstore.com/products/sesame.jpg',
      inStock: true,
    },
    {
      id: 'prod_015',
      name: 'Organic Groundnut Oil (Cold Pressed)',
      category: 'Oils',
      price: 720,
      currency: 'INR',
      unit: '1 L',
      image: 'https://cdn.organicstore.com/products/groundnut-oil.jpg',
      inStock: true,
    },
  ];
  ObjectKey = Object.keys;
  CategoryCollections = ['All', 'Honey', 'Grains', 'Pulses', 'Seeds', 'Oils'];
  sortingCollections = [
    'Relevance',
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
  ];


  onCategoryChange(event: any) {
    console.log('Selected Category:', event);
    if (event.value !== 'All') {
      this.products = this.products.filter(
        (product) => product.category == event.value
      );
    } 
    else{
      this.products = this.productstemp;                               
    }
  }


  onSortChange(event: any) {
    console.log('Selected Sort Option:', event);

    if (event.value === 'Price: Low to High') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (event.value === 'Price: High to Low') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  openCart(){
    this.openCartDialog = true;
  }
  closeCart(){
    this.openCartDialog = false;
  }
}
