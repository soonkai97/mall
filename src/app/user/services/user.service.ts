import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: Observable<firebase.default.User | null>;
  private userList: AngularFireList<any>;
  
  constructor(public router: Router, private user: User, private angularFireAuth: AngularFireAuth, private firebase: AngularFireDatabase) { 
    this.userData = angularFireAuth.authState;
    this.userList = this.firebase.list('users');
  }

  //sign up
  SignUp(email: string, password: string) {
    console.log(email);
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      window.alert('Hi, ' + email + ' , you are successfully signed up!');
      this.router.navigateByUrl('');

    })
    .catch(error => {
      window.alert('Sign Up Failed!');
      this.router.navigateByUrl('/account');
    });
  }

  //sign in
  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      window.alert('Hi, ' + email + ' , you are successfully logged in!');
      this.router.navigateByUrl('');

    })
    .catch(err => {
      window.alert('Sign In Failed!');
      this.router.navigateByUrl('/account');
    });
  }

  //sign out
  SignOut() {
    this.angularFireAuth.signOut();
  }

  //getUserList
  getUsersFromFirebase() {
    return this.userList;
  }

  addUserToFirebase(user: UserProfile) {
    this.userList.push(user);
  }

  updateUserOnFirebase(user: UserProfile) {
    let $key = user.$key;
    this.userList.update($key, user);
  }

  deleteUserFromFirebase($key: string) {
    this.userList.remove($key);
  }
}

export class User {
  email: string;
  password: string;
  
}

export class UserProfile {
  $key: string;
  name: string;
  gender: string;
  phone: number;
  address: string
}
