import { OrderService } from './services/order.service';
import { CartService } from './services/cart/cart.service';
import { ProductService } from './services/product/product.service';
import { CategoryService } from './services/category/category.service';
import { AdminAuthGuardService } from './services/guard/admin-auth-guard.service';
import { UserService } from './services/user/user.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';
import { SliderModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductCategoryFilterComponent } from './products/product-filter/product-category-filter/product-category-filter.component';
import { ProductPriceFilterComponent } from './products/product-filter/product-price-filter/product-price-filter.component';
import { ProductQuantityComponent } from './products/product-quantity/product-quantity.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { ShippingFormComponent } from './checkout/shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    ProductManagementComponent,
    MyOrdersComponent,
    LoginComponent,
    OrderManagementComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductCategoryFilterComponent,
    ProductPriceFilterComponent,
    ProductQuantityComponent,
    CartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    SliderModule,
    ButtonModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      // anonymous
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'login', component: LoginComponent },

      // user
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },

      // admin
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component: ProductManagementComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/orders', component: OrderManagementComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
