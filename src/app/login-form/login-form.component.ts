import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userName="admin";
  password="admin";
  name:string=""
  key:string=""
  nameError:string=""
  passwordError:string=""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  dataSubmit(){
    if(this.name==this.userName&&this.key==this.password){
      this.router.navigate(['productsList']);
    }else{
      // this.router.navigate(['login']);
      this.nameError="Enter valid Data"
      this.passwordError="Enter valid Password"
    }
}
}