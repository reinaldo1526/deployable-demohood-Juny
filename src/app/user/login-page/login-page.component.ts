import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  // showUserData(){
  //   console.log(this.authserv.getUserInfo())
  //   console.log(this.authserv.getCurrentUser())
  // }

  ngOnInit() {
  }

}
