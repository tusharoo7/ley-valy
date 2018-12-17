import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { MyAccountPage } from '../my-account/my-account';
import {TilkStatPage} from '../tilk-stat/tilk-stat';

/**
 * Generated class for the ProjectStatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage({name :"projectstat"})
//declare var google: any;
@Component({
  selector: 'page-project-stat',
  templateUrl: 'project-stat.html',
})

export class ProjectStatPage {
  projectid :any;
  tik_list_stat:any;
  projectname:any;

  public columnChartData:any 
  // public columnChartData:any =  {
  //   chartType: 'ColumnChart',
  //   dataTable: [
  //     ['Country', 'Performance', 'Profits'],
  //     ['Germany', 700, 1200],
  //     ['USA', 300, 600],
  //     ['Brazil', 400, 500],
  //     ['Canada', 500, 1000],
  //     ['France', 600, 1100],
  //     ['RU', 800, 1000]
  //   ],
  //   options: {title: 'Countries'}
  // };
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalservice: GlobalValueProvider,public helperservice : HelperService) {
    this.projectid = navParams.get('projectid') ;
    this.projectname  = navParams.get('projectname')
    console.log(this.projectid);
   // google.charts.load('current', {'packages':['corechart', 'bar']});
  }


  ionViewWillEnter(){
    //  window.location.reload();
    let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.listtilkeestat( this.projectid).subscribe((resp) => {
        loadingPop.dismiss();
        console.log(resp.contents);
       
      this.tik_list_stat = resp.contents ;
        //this.navCtrl.push('tilkee_api_integration');
  
   }, (err) => 
   {
   this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
   });   
    }
  ionViewDidLoad() {

    console.log('ionViewDidLoad ProjectStatPage');
  }


  view_stat_details(tilk_id,projectname,pdate,stime,titel)
{
    
  //let profileModal = this.modalCtrl.create('TilkStatPage', { 'projectid': this.projectId_tilkee,'id_connexion':tilk_id });
 // profileModal.present();
 console.log(this.projectid);
 this.navCtrl.push(TilkStatPage, { 'projectid': this.projectid,'id_connexion':tilk_id,'projectname' :projectname,'pdate':pdate ,'stime' :stime,'titel':titel})
 // this.navCtrl.push('TilkStatPage', { 'projectid': this.projectid,'id_connexion':tilk_id,'projectname' :projectname,'pdate':pdate ,'stime' :stime,'titel':titel})
}

got_to_home()
{
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}

converttime(time)
{
      let hoursting="";
      let mintuestring ="";
      let seconstring = "" ;
      // var seconds = (time/1000);
      // var minutes = seconds/60;
      // let mnc= (seconds%60).toFixed(2);
      // seconds = +mnc
      // var hours = (minutes/60);
      // minutes = minutes%60;
      var total = Math.floor(time/1000);
      var seconds = total%60;
      total = total / 60;
      Math.random()
      var minutes = Math.floor(total % 60);
      // total = total / 60;
     // var hours = Math.floor(total / 60);
     var hours = 3;
      let timestring = { 'hour':hours ,'minutes':minutes ,'seconds': seconds}
      if(hours>=1)
      {
        hoursting = hours + ':'
      }
      else
      {
        hoursting = '00'+':'
      }
      if(minutes>=1)
      {
        mintuestring = minutes + ':'
      }
      else
      {
        mintuestring = '00'+':'
      }

     // 0, 0, 0, 7, 23, 0, 0
      return timestring ;
}
}
