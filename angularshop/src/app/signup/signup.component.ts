import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  public signUpForm !: FormGroup;
  constructor(private FormBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.signUpForm = this.FormBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }


  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signUpForm.value)
    .subscribe(res=>{
      alert("Successfully Registered");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong");
    })
   
  }
}

