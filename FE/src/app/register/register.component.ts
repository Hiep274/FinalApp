import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("register", { static: true }) register: ModalDirective | undefined;
  userName: any;
  password: any;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.register?.show();
  }
  close() {
    this.register?.hide();
  }

}
