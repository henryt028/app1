import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'
import {User} from '../models/user.model'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(service => {
      this.users = service
    });
  }

}
