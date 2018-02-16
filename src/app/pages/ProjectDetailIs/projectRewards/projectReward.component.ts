import { Reward } from './../../../../model/Reward';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input, NgModule } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'ProjectReward',
  styleUrls: ['./projectReward.component.scss'],
  templateUrl: './projectReward.component.html',
})

@NgModule({

    imports: [ BrowserModule, LazyLoadImageModule ],
   
})
export class ProjectRewardComponent{
@Input() reward: Reward;

}
