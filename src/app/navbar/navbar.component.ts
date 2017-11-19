import { Observable } from 'rxjs/Observable';
import { CartService } from './../services/cart/cart.service';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<Cart>;

  constructor(private authService: AuthService, private cartService: CartService) { 
  }

  logout() {
    this.authService.logout();
  }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.cartService.getCart();
  }
}
