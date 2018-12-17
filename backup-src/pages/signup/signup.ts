import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public user = {
                   'fname':'', 
                   'lname':'', 
                   'enterprice':'', 
                   'password':'', 
                   'position':'', 
                   'mobile':'', 
                   'phone':'', 
                   'email':''
                }

  constructor(public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  registration_at_leyvalley()
  {
   
      if(this.user.fname=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your First Name');
      }
      else if(this.user.lname=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Last Name');
      }
      else if(this.user.enterprice=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Enterprice Name');
      }
      else if(this.user.password=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Password');
      }
      else if(this.user.position=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Position');
      }
      else if(this.user.mobile=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Mobile No');
      }
      else if(this.user.phone=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Phone No');
      }
      else if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
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
        this.globalservice.siginup(this.user).subscribe((resp) => {
                loadingPop.dismiss();
               this.navCtrl.push(HomePage);
                // if (resp.registration.status==1)
                // {
                //   this.helperservice.sendalertmessage('bottom',resp.registration.message);
                //   this.navCtrl.push(HomePage);     
                // }
                // else
                //  {
                //    this.helperservice.sendalertmessage('bottom',resp.registration.message);
                //  }
         }, (err) => 
         {
          this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
        });   

      }
  }
}
