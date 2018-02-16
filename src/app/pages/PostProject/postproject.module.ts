import { RewardComponent } from './rewardsComponent/reward.component';
import { CookieService } from 'ngx-cookie-service';
import {
  FileSelectDirective
} from 'ng2-file-upload';
import {
  FileUploaderComponent
} from './FileUploader/file-uploader.component';
import {
  HttpModule
} from '@angular/http';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  AfterViewInit
} from '@angular/core';
import {
  AngularEchartsModule
} from 'ngx-echarts';
import {
  postproject
} from "./postproject.component";
import {
  InitialInformation
} from "./InitialInformation/initialInformation.component";
import {
  ThemeModule
} from '../../@theme/theme.module';
import {
  ProjectDetailComponent
} from "./detailsInformation/projectdetail.component";
import {
  ReactiveFormsModule
} from '@angular/forms'
import {
  ProjectDetailTabs
} from "./projectdetailtabs/projectdetailtabs.component";
import {
  CKEditorModule
} from 'ng2-ckeditor';
import {
  ImageUploadModule
} from "angular2-image-upload";
import {
  YoutubePlayerMiniModule
} from 'ng2-youtube-player-mini';
import {
  WebAppComponent
} from "./web3.component";
import {
  UPLOAD_DIRECTIVES
} from 'ng2-file-uploader/ng2-file-uploader';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
@NgModule({
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    CKEditorModule,
    ImageUploadModule.forRoot(),
    YoutubePlayerMiniModule,
    LazyLoadImageModule,
    FormsModule,
    CustomFormsModule
  
  


  ],
  declarations: [
    InitialInformation,
    postproject,
    ProjectDetailComponent,
    ProjectDetailTabs,
    WebAppComponent,
    RewardComponent,
    FileSelectDirective,


  ],
    providers: [ CookieService ],

})
export class PostPRojectModule {



}

