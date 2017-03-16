import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName;
  lastName;
  email;

  constructor() { 
    this.firstName = 'Joe';
    this.lastName = 'Doe';
    this.email = ['Select Email'];
  }

  ngOnInit() {
  }

}
