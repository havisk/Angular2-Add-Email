import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('showField', [
      state('show', style({opacity: '1'})),
      state('hide', style({opacity: '0'})),
      transition('show <=> hide', [
        animate(500)
        ])
      ])
  ]
})
export class ProfileComponent implements OnInit {
  firstName;
  lastName;
  emails;
  newEmail;
  errMsg;
  pattern;
  state: string = 'hide';

  constructor() { 
    this.firstName = '';
    this.lastName = '';
    this.emails = ['Select Email'];

  
  }

  togglestates(){
    this.state = (this.state === 'hide' ? 'show' : 'hide');
  }

  ngOnInit() {
    
  }
  addEmail(){
    if(!this.newEmail) {
      this.errMsg = "Please Enter Valid Email Address!!!";
    }
    else{
      this.emails.push(this.newEmail);
      this.newEmail = "";
      this.errMsg = "";
      this.state = (this.state === 'hide' ? 'show' : 'hide');
    }   
  }
}
