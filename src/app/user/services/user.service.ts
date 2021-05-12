import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: Observable<firebase.default.User | null>;
  constructor(public router: Router, private user: User, private angularFireAuth: AngularFireAuth) { 
    this.userData = angularFireAuth.authState;
  }

  //sign up
  SignUp(email: string, password: string) {
    console.log(email);
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      window.alert('Hi' + this.user.email + 'You are successfully signed up!');
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
      window.alert('Hi' + this.user.email + 'You are successfully logged in!');
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
}

export class User {
  email: string;
  password: string;
  name: string;
  gender: string;
  phone: string;
}
