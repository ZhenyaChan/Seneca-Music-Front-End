/*********************************************************************************
*  WEB422 – Assignment 5/6

*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: _Tran_Quang_Dung__ Student ID: _108031204__ Date: ___04/19/2022________
*
********************************************************************************/ 

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web422-a6';
  searchString!: string;
  public token: any;

  constructor(private router: Router, private auth: AuthService){}

  ngOnInit(): void {
    this.router.events.subscribe((event:Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  handleSearch(): void {
    this.router.navigate(['/search'], {queryParams: {q: this.searchString}});
    this.searchString = "";
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
