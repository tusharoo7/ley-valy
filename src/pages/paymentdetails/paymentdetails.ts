import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the PaymentdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentdetails',
  templateUrl: 'paymentdetails.html',
})
export class PaymentdetailsPage {
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentdetailsPage');
    this.setBackButtonAction();
  }
  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }

  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      console.log("backbutton fire");
  //   //Write here wherever you wanna do
  //   const index = this.navCtrl.getActive().index;
  //   console.log(index);
  //  // this.navCtrl.remove(0, index+1);
  //  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
  //   //this.navCtrl.push(BussinesscardPage);
  this.navCtrl.setRoot(MyAccountPage);
    }
  }
}
