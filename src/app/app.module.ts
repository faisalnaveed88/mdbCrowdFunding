import { PostPRojectModule } from './pages/PostProject/postproject.module';
import { ProjectDetailsModule } from './pages/ProjectDetailIs/ProjectDetails.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import {CoreModule} from './@core/core.module';
import {MDBBootstrapModules} from '../../node_modules/ng-mdb-pro/mdb.module';
import {MDBSpinningPreloader} from '../../node_modules/ng-mdb-pro/pro/preloader/preloader.service';
import { RewardComponent } from './pages/PostProject/rewardsComponent/reward.component';
import { FormsModule } from './pages/forms/forms.module';
import { CookieService } from 'ngx-cookie-service';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WINDOW_PROVIDERS } from "./windows.service";

import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModules.forRoot(),
    DashboardModule,

CustomFormsModule,
PostPRojectModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    CookieService,
    MDBSpinningPreloader,
    WINDOW_PROVIDERS
  ],
})
export class AppModule {
}
