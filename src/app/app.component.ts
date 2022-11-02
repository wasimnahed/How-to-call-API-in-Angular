import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-setvalue-patchValue-reset';

  // name: string = "";
  // email: string = "";
  // mobile: string = '';


  // contactForm: FormGroup;

  // constructor(private fb: FormBuilder) {

  //   this.contactForm = fb.group({
  //     yourname: ['', [Validators.required, Validators.minLength(3)]],
  //     emailid: ['', [Validators.required, Validators.email]],
  //     mobile: ['', Validators.required],
  //   });

  // }

  // postData() {

  //   // console.log(val);
  //   const name = this.contactForm.get('yourname').value;
  //   const email = this.contactForm.get('emailid').value;
  //   const mobile = this.contactForm.get('mobile').value;
  //   console.log(name + ", " + email + ", " + mobile);
  // }

  // setData() {
  //   this.contactForm.patchValue({
  //     "yourname": 'Pradeep',
  //     "emailid": 'pradeep@yahoo.com'
  //   })
  // }

  // resetData() {
  //   this.contactForm.reset();
  // }






  userData:any=[]; 
 constructor(private userdataService:UserdataService){

 this.userdataService.getUserData().subscribe(data=>{
   console.log(data);
  this.userData=data;

 })

}
  



}
