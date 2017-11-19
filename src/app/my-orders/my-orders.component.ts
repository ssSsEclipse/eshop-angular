import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { OrderService } from '../services/order.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.switchMap(user => orderService.getOrdersByUser(user.uid));
  }
}
