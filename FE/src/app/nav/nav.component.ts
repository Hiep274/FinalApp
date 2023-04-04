import { AccountService } from './../_services/account.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('registerModal', { static: true }) registerModal: RegisterComponent | undefined;
  @ViewChild('loginModal', { static: true }) loginModal: LoginComponent | undefined;
  model: any = {};
  userName: any;
  currentUser$: Observable<User | null> = new Observable<User | null>();
  constructor(
    private render: Renderer2,
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
    this.userName = JSON.parse(localStorage.getItem('user') || '{}').userName;
  }

  login(){
    this.loginModal?.show();
    // this.accountService.login(this.model).subscribe(response => {
    // });
  }

  logout(){
    this.accountService.logout();
  }

  register(){
    this.registerModal?.show();
  }

  reload(param: any){
    this.userName = param;
  }
  // //click event for dropdown menu
  // toggleMenu() {
  //   if (document.getElementById('dropdown-toggle')?.classList.contains('show')) {
  //     this.render.removeClass(document.getElementById('dropdown-toggle'), 'show');
  //     this.render.removeClass(document.getElementById('dropdown-menu'), 'show');
  //     document.getElementById('dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  //     return;
  //   }
  //   else {
  //   this.render.addClass(document.getElementById('dropdown-toggle'), 'show');
  //   this.render.addClass(document.getElementById('dropdown-menu'), 'show');
  //   document.getElementById('dropdown-toggle')?.setAttribute('aria-expanded', 'true');
  //   }
  // }
}
