import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccountService } from '../_services/account.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("login", { static: true }) login: ModalDirective | undefined;
  userName: any;
  password: any;
  invalidUser: boolean = false;
  invalidPass: boolean = false;
  input: any = {
    userName: '',
    password: ''
  };
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  show() {
    this.login?.show();
  }

  submit() {
    this.input.userName = this.userName;
    this.input.password = this.password;
    if (this.userName == null || this.userName == "" || this.userName == undefined || this.userName.trim() == "") {
      this.invalidUser = true;
      this.toastr.error("Please enter a valid username");
    }
    else {
      this.invalidUser = false;
    }
    if (this.password == null || this.password == "" || this.password == undefined || this.password.trim() == "") {
      this.invalidPass = true;
      this.toastr.error("Please enter a valid password");
    }
    else {
      this.invalidPass = false;
    }
    if (this.invalidUser == false && this.invalidPass == false) {
      this.accountService.login(this.input)
      .pipe(finalize (() => {
        this.login?.hide();
      }))
      .subscribe(response => {
        this.router.navigateByUrl('/products')
      });
    }
  }
  close() {
    this.login?.hide();
  }

}
