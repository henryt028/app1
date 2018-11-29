import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email :string;
  password :string;
  constructor(private router: Router, private authService: AuthService){
  }

  public onLoginClick(){
    this.authService.login(this.email, this.password)
            .pipe(first())
            .subscribe(
                data => {
                  localStorage.setItem('login', data.token);
                  //console.log('-- '+data.token);
                  this.router.navigate(['./users']);
                },
                error => {
                    this.email= "SIN RESULTADOS"
                });
  }

  ngOnInit() {
  }

}
