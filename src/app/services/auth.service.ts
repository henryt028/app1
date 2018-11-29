import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginObject} from '../models/loginObject.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    
    return  this.http.post<LoginObject>('https://reqres.in/api/login', new LoginObject (email,password));
  }

}
