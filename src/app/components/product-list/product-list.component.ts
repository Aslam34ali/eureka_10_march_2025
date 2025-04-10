import { Component } from '@angular/core';
import productsArr from './product_data';  
import {NgxPaginationModule} from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  imports: [ CommonModule,
    FormsModule,
    NgxPaginationModule, 
    FontAwesomeModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products =productsArr;
  p:any;
  faStar = faStar;

  searchText: string = '';
  sortOrder: string = '';

  // Called on keyup in search box
  searchByTitle() {
    this.products = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Called on click of sort buttons
  sortByPrice(order: 'asc' | 'desc') {
    this.sortOrder = order;
    this.products.sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}
