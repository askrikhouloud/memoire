import { Component } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable, NgModule } from '@angular/core';


declare let  cleave :any ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'platformuniteformation';
  loginbtn:boolean;
  logoutbtn:boolean;
  
  constructor(private dataService: AuthService) {
  dataService.getLoggedInName.subscribe((name: boolean) => this.changeName(name));
  if(this.dataService.isLoggedIn())
  {
  console.log("loggedin");
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }
  
  }
  
  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  logout()
  {
  this.dataService.deleteToken();
  window.location.href = window.location.href;
  }
  }
  

 