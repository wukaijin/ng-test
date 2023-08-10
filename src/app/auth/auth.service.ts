/*
 * @Author: carlos
 * @Date: 2023-08-10 15:03:38
 * @LastEditTime: 2023-08-10 15:07:49
 * @FilePath: \ng-test\src\app\auth\auth.service.ts
 * @Description: null
 */
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl?: string;
  constructor() {}
  login(): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      delay(3000),
      tap(() => (this.isLoggedIn = !this.isLoggedIn))
    );
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
