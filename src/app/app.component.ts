import { Component, OnInit } from '@angular/core';
import { servicioAuth } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecetarioWeb';

  constructor(private servicioAuth: servicioAuth) {
  }

  ngOnInit(): void {
    this.servicioAuth.autoLogin();
  }
}
