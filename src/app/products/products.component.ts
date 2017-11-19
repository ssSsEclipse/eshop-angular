import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from './../services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filteredProductsPriceRange: {};
  category: string;
  cart$: Observable<Cart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;

    if (this.filteredProducts.length > 0) {
      this.filteredProductsPriceRange = {
        min: this.filteredProducts.reduce((min, product) => product.price < min ? product.price : min, this.filteredProducts[0].price),
        max: this.filteredProducts.reduce((max, product) => product.price > max ? product.price : max, this.filteredProducts[0].price)
      };
    }
  }
}
