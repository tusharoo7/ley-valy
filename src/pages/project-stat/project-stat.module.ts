import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectStatPage } from './project-stat';
import { Pipe,PipeTransform } from '@angular/core';
import {TooltipModule} from "ngx-tooltip";


@Pipe({name: "milisecondtotime"})
class MilisecondtotimePipe implements PipeTransform  {
  transform(value: number): string
    {
      let abc ="";
      let sww="";
      var seconds = (value/1000);
      let xyz = (seconds/60).toString() ;
      var minutes = parseInt(xyz, 10);
      let mnc= (seconds%60).toFixed(2);
      seconds = +mnc
      var hours = parseInt((minutes/60).toString(), 10);
      minutes = minutes%60;
      
      if(hours>0)
      {
         abc = hours + 'hr'
      }
      else
      {
         abc = ''
      }
      if(minutes>0)
      {
         sww = minutes + 'm'
      }
      else
      {
         sww = ''
      }
      return abc+ sww + seconds +'s';
   
  }
}
@NgModule({
  declarations: [
    ProjectStatPage,MilisecondtotimePipe,
  ],
  imports: [
    IonicPageModule.forChild(ProjectStatPage),TooltipModule
  ],
})
export class ProjectStatPageModule {}
