/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { DOCUMENT } from '@angular/platform-browser';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { WINDOW } from "./windows.service";
@Component({
  selector: 'ngx-app',
  template: `
<header>

    <mdb-navbar SideClass="top-nav-collapse navbar fixed-top navbar-expand-lg navbar-dark {{navbarbackround}} scrolling-navbar " [containerInside]="false">
        <logo>
            <a class="logo navbar-brand" href="#"><strong>Navbar</strong></a>
        </logo>
        <links>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active waves-light" mdbRippleRadius>
                    <a class="nav-link" routerLink="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item waves-light" mdbRippleRadius>
                    <a class="nav-link" routerLink="/postProject" >PostProject</a>
                </li>
               
            </ul>
        </links>
    </mdb-navbar>
   
    <!-- Main -->
</header>


<div [@routerAnimation]="getRouteAnimation(route)">
  <router-outlet #route="outlet"></router-outlet>
</div>
 
`
  ,
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ],
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  navbarbackround = "";
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

  constructor(private analytics: AnalyticsService, @Inject(DOCUMENT) private document: Document,  @Inject(WINDOW) private window: Window) {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 200) {
      console.log(">200")
     this.navbarbackround = "indigo";
    } else if ( number < 10) {
      this.navbarbackround = "";
    }
  }

  ngOnInit(): void {
    
  }
}
