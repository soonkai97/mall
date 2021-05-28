import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserProfile, UserService } from '../user/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userprofile: UserProfile = new UserProfile();
  
  constructor(public userService: UserService) { }

  ngOnInit() { 
  }

  submit(userForm: NgForm) {
    console.log('Form Submitted', userForm);
    this.userService.addUserToFirebase(userForm.value);
  }

}
