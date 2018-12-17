import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TrackPage } from '../track/track';
import { BussinesscardPage } from '../bussinesscard/bussinesscard';
/**
 * Generated class for the TrackfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage({name:'trackfile'})
@Component({
  selector: 'page-trackfile',
  templateUrl: 'trackfile.html',
})
export class TrackfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackfilePage');
  }

  createnewtrackfile()
  {
    this.navCtrl.push(BussinesscardPage); 
  }
  trackfileread()
  {
    this.navCtrl.push(TrackPage ,{'read':1})
  }
  trackfilenotread()
  {
    this.navCtrl.push(TrackPage ,{'read':0})
  }
}
