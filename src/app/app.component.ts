import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/account');
  }
}
