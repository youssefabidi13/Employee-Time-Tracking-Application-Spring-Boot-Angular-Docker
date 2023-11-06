import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin! : FormGroup;

  constructor(private fb : FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username:this.fb.control(''),
      password:this.fb.control('')
    })
  }

  handleLogin() {
    let username=this.formLogin.value.username;
    let pwd=this.formLogin.value.password;
    this.authService.login(username,pwd).subscribe(
      {
next:data => {
 this.authService.loadProfile(data);
  this.router.navigateByUrl("/")

},
error:err => {console.log(err)},
      })
  }

}
