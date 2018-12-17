import { Component } from '@angular/core';
import { NavController ,MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { MyAccountPage }  from '../my-account/my-account';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public user = {
                  'password':'', 
                   'email':''
                 }
  constructor(private menuCtrl: MenuController , public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController) {
    //this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menuCtrl.enable(false,'myMenu');
   console.log(this.menuCtrl.isEnabled('myMenu')) ;
   this.menuCtrl.swipeEnable(false, 'myMenu')
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true,'myMenu');
  }
  gosignup() {
    this.navCtrl.push(SignupPage);
  }
  goforgotPass() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  try_to_loggedin()
  {
    if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
    {
      this.helperservice.sendalertmessage('bottom','please enter your email');
    }
    else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) 
    {
      this.helperservice.sendalertmessage('bottom','please enter proper email ');
    }
     else if(this.user.password=='')
    {
      this.helperservice.sendalertmessage('bottom','Please Enter Your Password');
    }
     else
    {

  let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.signin(this.user).subscribe(
        (data)=>{
         loadingPop.dismiss();
         this.navCtrl.setRoot(MyAccountPage);
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
