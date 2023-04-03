import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    private render: Renderer2,
  ) { }

  ngOnInit() {
  }

  //click event for dropdown menu
  toggleMenu() {
    if (document.getElementById('dropdown-toggle')?.classList.contains('show')) {
      this.render.removeClass(document.getElementById('dropdown-toggle'), 'show');
      this.render.removeClass(document.getElementById('dropdown-menu'), 'show');
      document.getElementById('dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      return;
    }
    else {
    this.render.addClass(document.getElementById('dropdown-toggle'), 'show');
    this.render.addClass(document.getElementById('dropdown-menu'), 'show');
    document.getElementById('dropdown-toggle')?.setAttribute('aria-expanded', 'true');
    }
  }
}
