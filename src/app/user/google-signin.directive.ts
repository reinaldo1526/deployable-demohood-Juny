import { Directive, HostListener } from '@angular/core';

//import for AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth'

// import all modules from firebase -- if needed
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

}
