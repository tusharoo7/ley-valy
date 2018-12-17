import { NgModule,Pipe,PipeTransform } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TilkStatPage } from './tilk-stat';
@Pipe({
  name: "milisecondtotime"
})

class MilisecondtotimePipe implements PipeTransform  {
  transform(value: number): string
    {
      let abc ="";
      let sww="";
      var seconds = (value/1000);
      let xyz = (seconds/60).toString() ;
      var minutes = parseInt(xyz, 10);
      seconds = seconds%60;
      var hours = parseInt((minutes/60).toString(), 10);
      minutes = minutes%60;
      
      if(hours>0)
      {
         abc = hours + ':'
      }
      else
      {
         abc = ''
      }
      if(minutes>0)
      {
         sww = minutes + ':'
      }
      else
      {
         sww = ''
      }
      return abc+ sww + seconds;
   
  }
}
@NgModule({
  declarations: [
    TilkStatPage,MilisecondtotimePipe
  ],
  imports: [
    IonicPageModule.forChild(TilkStatPage),
  ],
})
export class TilkStatPageModule {}
