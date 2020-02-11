import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-customers-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomersAccountComponent implements OnInit {
  userID: String;
  constructor(private afs: AngularFirestore, private auth: AuthService) { }
  accountsForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    currentBank: new FormControl('', [Validators.required]),
    routingNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    accountNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    amount: new FormControl('', [Validators.required])
  })
  async saveAccountInfo() {
    await this.auth.getUserInfo().subscribe(user => {
      this.userID = user.uid;
    })
    this.afs.collection('user').add({
      uid: this.userID,
      firstName: this.accountsForm.value.firstName,
      lastName: this.accountsForm.value.lastName,
      currentBank: this.accountsForm.value.currentBank,
      routingNumber: this.accountsForm.value.routingNumber,
      accountNumber: this.accountsForm.value.accountNumber,
      amount: this.accountsForm.value.amount
    })
    console.log("Added new look")
  }
  ngOnInit() {
  }
}

