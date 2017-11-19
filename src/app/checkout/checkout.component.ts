import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{ 
  cart$: Observable<Cart>;

  constructor(
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
