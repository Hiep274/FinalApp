import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("register", { static: true }) register: ModalDirective | undefined;
  @Output() closeModal = new EventEmitter();
  userName: any;
  password: any;
  model: any = {
    userName: '',
    password: ''
  };
  constructor(
    private acc: AccountService
  ) { }

  ngOnInit() {
  }

  show() {
    this.register?.show();
  }
  close() {
    this.register?.hide();
  }

  submit() {
    this.model.userName = this.userName;
    this.model.password = this.password;
    this.acc.register(this.model);
    this.close();
    this.closeModal.emit(this.userName);
  }

}
