import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccountService } from '../_services/account.service';
import { finalize, Subject } from 'rxjs';

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
      alert("Please enter username");

    }
    else {
      this.invalidUser = false;
    }
    if (this.password == null || this.password == "" || this.password == undefined || this.password.trim() == "") {
      this.invalidPass = true;
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
      });
    }
  }
  close() {
    this.login?.hide();
  }

}
