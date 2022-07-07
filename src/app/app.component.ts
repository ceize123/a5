/********************************************************************************* 
* WEB422 – Assignment 05 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this 
* assignment has been copied manually or electronically from any other source (including web sites) or 
* distributed to other students. 
* 
* Name: __Yi-Tso Kuo______ Student ID: ___166577197____ Date: __Mar. 17, 2022_____ 
* 
********************************************************************************/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'web422-a4';
    searchString: string = "";

    constructor( private router: Router ){}

    handleSearch() {
        this.router.navigate(["/search"], { queryParams: { q: this.searchString } });
        this.searchString = ""; // set value to empty
    }
}
