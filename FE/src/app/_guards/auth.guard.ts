import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private acc: AccountService,
    private toastr: ToastrService) {
  }
  canActivate(): Observable<boolean> {
    return this.acc.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else {
          this.toastr.error('You shall not pass!!!');
          return false;
        }
      })
    )
  }
}
