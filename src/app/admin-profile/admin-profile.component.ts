import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor( private userService: UserServiceClient,
               private router: Router) { }

  logout() {
    this.userService.logout().then(() => this.router.navigate(['login']));
  }

  ngOnInit() {
  }

}
