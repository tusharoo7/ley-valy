import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 import { BussinesscardPage } from '../bussinesscard/bussinesscard';
import { BussinesscardDetailsPage } from '../bussinesscard-details/bussinesscard-details';
import {ContactPage} from '../contact/contact'


import {TrackfilePage} from '../trackfile/trackfile';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }
  gobussiness() {
    this.navCtrl.push(BussinesscardPage); 
  }
  start_track_a_file(){
    
      //  this.navCtrl.push('tilkee_api_integration')
      this.navCtrl.push(TrackfilePage);
  }
  go_search_contact()
  {
    this.navCtrl.push(ContactPage);
  }
}
