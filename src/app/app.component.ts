import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { ISubscription } from 'rxjs/Subscription';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private subscription: ISubscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private userService: UserService, private authService: AuthService, router: Router) {
    this.subscription = authService.user$.subscribe(user => {
      if (!user) return;
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
