import { CookieService } from 'ngx-cookie-service';
import { Project } from './../../../../model/Project';

import { Component, OnDestroy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {NgForm  } from "@angular/forms";

import { FormControl , Validators, FormGroup} from '@angular/forms';
@ Component({
  selector: 'initial-information',
  templateUrl: './initialInformation.html',
  styleUrls: ['./form-layouts.component.scss', './form-inputs.component.scss'],
})
export class InitialInformation{

  constructor(public cookieservie: CookieService){

  this.cookieservie.set("IdeaTitle","");
     this.cookieservie.set("IdeaCatagory","");
   this.cookieservie.set("IdeaLoucation","");

    this.cookieservie.set("IdeaImageUrl","");
    this.cookieservie.set("IdeaShortBlurb","");
   this.cookieservie.set("IdeaFundingDuration","");
   this.cookieservie.set("IdeaFundingGoal","");

     this.cookieservie.set("IdeaVedioUrl","");
     this.cookieservie.set("IdeaStoryDescr","");
     this.cookieservie.set("IdeaStoryRisk","");

      


  }
  Catagory = new FormControl("1",[Validators.required]);
  Title = new FormControl();
  Loucation = new FormControl();
   _project: Project = new Project(); 
@ Output() continueButton  = new EventEmitter< Project>();

continubuttonClick( value: boolean){
   this._project.Catagory = this.Catagory.value;
   this._project.Title =  this.Title.value;
   this._project.Loucation = this.Loucation.value;

  this .continueButton.emit(this._project);
}

  submited  = false;
  onSubmit(form: NgForm){
    this._project.Catagory = this.Catagory.value;
   this._project.Title =  this.Title.value;
   this._project.Loucation = this.Loucation.value;
  this.cookieservie.set("IdeaTitle",this._project.Title.toString());
  this.cookieservie.set("IdeaCatagory",this._project.Catagory.toString());
  this.cookieservie.set("IdeaLoucation",this._project.Loucation.toString());
 this .continueButton.emit(this._project);
    this.submited = true;
     
 }

 


}
