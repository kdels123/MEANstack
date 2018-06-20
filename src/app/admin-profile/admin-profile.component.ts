import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor( private service: UserServiceClient,
               private router: Router) { }

  username;
  firstName;
  lastName;
  email;

  logout() {
    this.service.logout().then(() => this.router.navigate(['login']));
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.username = user.username)
      .then(user => this.firstName = user.firstName)
      .then(user => this.lastName = user.lastName)
      .then(user => this.email = user.email);
  }

}
