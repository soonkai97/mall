import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
