import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { servicioAuth } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: servicioAuth = inject(servicioAuth);
  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
  }
  return authService.isAuthenticated();
};