import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

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

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.login?.show();
  }

  submit() {
    if (this.userName == null || this.userName == "" || this.userName == undefined || this.userName.trim() == "") {
      this.invalidUser = true;
      console.log("invalid user");
    }
    else {
      this.invalidUser = false;
    }
    if (this.password == null || this.password == "" || this.password == undefined || this.password.trim() == "") {
      this.invalidPass = true;
      console.log("invalid user");
    }
    else {
      this.invalidPass = false;
    }
    // if (this.invalidUser == false && this.invalidPass == false) {
    //   this.login?.hide();
    // }
  }
  close() {
    this.login?.hide();
  }

}
