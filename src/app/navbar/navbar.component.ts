import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{

  constructor(private router: Router) { }

  ngOnInit(): void
  {
  }

  onLoginClick()
  {
    this.router.navigate(['login']);
  }

  onRegisterClick()
  {
    this.router.navigate(['register']);
  }

  onAboutClick() {
    this.router.navigate(['about']);
  }
}
