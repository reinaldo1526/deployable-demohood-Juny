import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  getUserInfo(){
    return this.afAuth.user
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
