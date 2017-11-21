import { Component, OnInit } from '@angular/core';
import {FitnessService} from '../../shared/service/fitness.service';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName, this.password);
  }
}
