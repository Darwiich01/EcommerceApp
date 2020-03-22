import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(form)
  {

    this.as.login(form.value.Email, form.value.Password)
    .then(data => console.log(data))
    .catch(err => console.log(err))

    this.router.navigate(['/'])

  }

}
