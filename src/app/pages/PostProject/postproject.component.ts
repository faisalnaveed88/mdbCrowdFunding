import { CookieService } from 'ngx-cookie-service';
import { FileHolder } from 'angular2-image-upload';
import { WebAppComponent } from './web3.component';
import {
  Project
} from './../../../model/Project';
import {
  Component,
  OnInit,
  ViewChild,

} from '@angular/core';
import {
  ProjectService
} from "../../@core/data/project.service";
import {
  Observable
} from 'rxjs/Observable';
import {
  FormControl
} from '@angular/forms';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./postproject.component.scss'],
  templateUrl: './postproject.component.html',
})
export class postproject implements OnInit {
    http: any;



@ViewChild(WebAppComponent) private web3:WebAppComponent;

  ShortBlurb = new FormControl();
   InitialProjectValues:Project = new Project();

  private varshowProjectInitialInformation: boolean = true;
  private varshowProjectDetail: boolean = false;
  private varshowProjectDetailTabs: boolean = false;
  private showtabnumber: number;


  reset() {
    this.varshowProjectInitialInformation = false;
    this.varshowProjectDetail = false;
    this.varshowProjectDetailTabs = false;
  }

  projectReceiver(pro: Project) {
    console.log(pro)
    console.log("reeiced")
  //  this._projectservice.AddProject(pro)
 
  this.web3.postaProject(pro);

   
   

  }

  funcshowProjectDetail(_pro: Project) {
    this.InitialProjectValues = _pro;
    console.log(this.InitialProjectValues);
    this.reset();
    this.varshowProjectDetail = true;
  }
  funcshowProjectDetailTabs(status: number) {
    this.reset();
    this.varshowProjectDetailTabs = true;
    this.showtabnumber = status;

  }

  constructor(public _projectservice: ProjectService, public cookieservice: CookieService) {

  }
  projectslist: any;
  name: String = "dfsdf";
  ngOnInit() {
    this._projectservice.getAllProjects().subscribe((projects: any) => this.projectslist = projects);
    var titlevalue  = this.cookieservice.get("Ideatabs");
    console.log(titlevalue)
    if ( titlevalue.toString() == "2"){
              this.varshowProjectInitialInformation =  false;
              this.varshowProjectDetail = false;
              this.varshowProjectDetailTabs = true;
              this.cookieservice.delete("Ideatabs");
    }

  }

  uploadImage(file: FileHolder){
    
   
    const formData = new FormData();

    formData.append('photo', file.file);

    this.http
      .post(URL, formData).map((res: any) => res).subscribe(

        (success) => {
        

 


          console.log(success._body)
          "assets/images/"+success._body;

        


        },
        (error) => alert(error)
      );

      this.http
      .get(URL, formData).map((res: any) => res).subscribe(

        (success) => {
        

          


          console.log(success._body)
          

         


        },
        (error) => alert(error)
      );



    console.log(file.file);
  
  
  }


}

