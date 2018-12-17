import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  public user = {
    
     'email':''
   }
  constructor(public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  changepassword(){
    if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
    {
      this.helperservice.sendalertmessage('bottom','please enter your email');
    }
    else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) 
    {
      this.helperservice.sendalertmessage('bottom','please enter proper email ');
    }
    
     else
    {

  let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.forgotpassworddata(this.user).subscribe(
        (data)=>{
         loadingPop.dismiss();
         this.navCtrl.setRoot(HomePage);
        //  if(data.login.success==1){
        //    localStorage.setItem('userId',data.login.details.entity_id);
        //    console.log('User created!')
        //    this.events.publish('user:created', data.login.details.entity_id);
        //     this.navCtrl.setRoot(TabsPage);
        //  }
        //  else  if(data.login.success==0){
        //    this.globalservice.presentToast(data.login.message);
        //  }
        //  else{this.globalservice.presentToast(data.login.error);
        //  }
        },
        (err)=>{
         loadingPop.dismiss();
        
         this.helperservice.sendalertmessage("bottom","something went wrong!Please try again.");
        }
       );
    }
  }
}
