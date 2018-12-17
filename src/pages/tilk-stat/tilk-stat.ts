import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { Navbar } from 'ionic-angular';
import {TrackPage} from '../track/track'

/**

/**
 * Generated class for the TilkStatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'TilkStatPage'})
@Component({
  selector: 'page-tilk-stat',
  templateUrl: 'tilk-stat.html',
})
export class TilkStatPage {
  @ViewChild(Navbar) navBar: Navbar;
  public projectid :any ;
  public tik_list_stat :any;
  public tik_list_stat_two :any;
  public id_tilk :any;
  public projectname:any;
  public pdate:any;
  public stime :any ;
  public titel :any;
  constructor( public viewCtrl: ViewController , public globalservice: GlobalValueProvider,public helperservice : HelperService , public navCtrl: NavController, public navParams: NavParams) {
    this.projectid = navParams.get('projectid') ;
    this.id_tilk = navParams.get('id_connexion');
    this.projectname = navParams.get('projectname');
    this.pdate = navParams.get('pdate');
    this.stime = navParams.get('stime');
    this.titel = navParams.get('titel');
  }

  ionViewDidEnter()
  {
    this.globalservice.detailsofaconnection(this.projectid,this.id_tilk).subscribe(
       (response)=>{
        this.tik_list_stat =response.contents;
        console.log(this.titel);
        console.log(this.projectname);
        console.log(this.stime);
        console.log(this.pdate);
        console.log(response);
       },
       (error)=>{

       }
    );
    // this.globalservice. statsofaproject(this.projectid).subscribe(
    //   (response_two)=>{
    //     console.log(response_two)
    //     this.tik_list_stat_two =response_two.contents;
    //     console.log('statsofaproject');
    //     console.log(this.tik_list_stat_two);
    //   },
    //   (error_two)=>{

    //   }

    // );
  }
  ionViewDidLoad() {
   // this.setBackButtonAction();
    console.log('ionViewDidLoad TilkStatPage');

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // setBackButtonAction(){
  //   this.navBar.backButtonClick = () => {
  //     console.log("backbutton fire");
  //   //Write here wherever you wanna do
  //   const index = this.navCtrl.getActive().index;
  //   this.navCtrl.remove(0, index);
  //   this.navCtrl.push(TrackPage);
  //   }
  // }

}
