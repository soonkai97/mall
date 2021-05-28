import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User, UserProfile, UserService } from '../user/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userprofile: UserProfile = new UserProfile();
  new: boolean;

  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsersFromFirebase();
  }

  submit(userForm: NgForm) {
    console.log('Form Submitted', userForm);
    this.userService.addUserToFirebase(userForm.value);
  }

}
