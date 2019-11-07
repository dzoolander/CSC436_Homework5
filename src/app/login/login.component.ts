import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
