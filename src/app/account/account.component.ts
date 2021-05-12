import { Component } from '@angular/core';
import { UserService, User } from '../user/services/user.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  user: User = new User();

  constructor(public userService: UserService){}
  email: string = '';
  password: string = '';

  signUp() {
    this.userService.SignUp(this.user.email, this.user.password);
    this.user.email = '';
    this.user.password = '';

  }

  signIn() {
    this.userService.SignIn(this.user.email, this.user.password);
    this.user.email = '';
    this.user.password = '';

  }

}
