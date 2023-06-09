import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }


  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
      this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong")
    })
  }

 
 
  

}