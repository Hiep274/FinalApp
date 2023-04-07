import { AccountService } from './../_services/account.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('registerModal', { static: true }) registerModal: RegisterComponent | undefined;
  @ViewChild('loginModal', { static: true }) loginModal: LoginComponent | undefined;
  model: any = {};
  currentUser$: Observable<User | null> = new Observable<User | null>();
  constructor(
    private render: Renderer2,
    public accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.loginModal?.show();
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  register(){
    this.registerModal?.show();
  }
}
