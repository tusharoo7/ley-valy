import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BussinesscardDetailsPage } from '../bussinesscard-details/bussinesscard-details';

/**
 * Generated class for the BussinesscardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bussinesscard',
  templateUrl: 'bussinesscard.html',
})
export class BussinesscardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BussinesscardPage');
  }
  gobussinesscarddetails() {
    this.navCtrl.push(BussinesscardDetailsPage);
  }
  scan_bcard()
  {
    this.navCtrl.push('add_card')
  }
}
