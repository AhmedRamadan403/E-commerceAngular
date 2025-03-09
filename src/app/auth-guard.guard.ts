import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let isValid = true;
  let router = inject(Router);
  if (localStorage.getItem('auth') == 'false') {
    router.navigate(['/login']);
    isValid = false;
  }
  return isValid;
};
