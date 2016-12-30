import { Component, OnInit } from '@angular/core';
import { BackandService } from 'angular2bknd-sdk';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(private backandService: BackandService) { }

  ngOnInit() { }

  getUsers() { }

  createUser() { }

  updateUser() { }

  deleteUser() { }

}
