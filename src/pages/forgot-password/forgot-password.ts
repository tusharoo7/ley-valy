import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


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
   osversion :any;
  constructor(public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  changepassword(){
    if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
    {
      this.helperservice.sendalertmessage('bottom','Please enter your email');
    }
    else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) 
    {
      this.helperservice.sendalertmessage('bottom','Please enter proper email ');
    }
    
     else
    {
      var objappVersion = navigator.appVersion;
      var objAgent = navigator.userAgent;
      var objbrowserName  = navigator.appName;
      var objfullVersion  = ''+parseFloat(navigator.appVersion); 
      var objBrMajorVersion = parseInt(navigator.appVersion,10);
      var objOffsetName,objOffsetVersion,ix;
      
      // In Chrome 
      if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) {
       objbrowserName = "Chrome";
       objfullVersion = objAgent.substring(objOffsetVersion+7);
      }
      // In Microsoft internet explorer
      else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) {
       objbrowserName = "Microsoft Internet Explorer";
       objfullVersion = objAgent.substring(objOffsetVersion+5);
      }
      
      // In Firefox
      else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) {
       objbrowserName = "Firefox";
      }
      // In Safari 
      else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) {
       objbrowserName = "Safari";
       objfullVersion = objAgent.substring(objOffsetVersion+7);
       if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1) 
         objfullVersion = objAgent.substring(objOffsetVersion+8);
      }
      // For other browser "name/version" is at the end of userAgent 
      else if ( (objOffsetName=objAgent.lastIndexOf(' ')+1) < 
                (objOffsetVersion=objAgent.lastIndexOf('/')) ) 
      {
       objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);
       objfullVersion = objAgent.substring(objOffsetVersion+1);
       if (objbrowserName.toLowerCase()==objbrowserName.toUpperCase()) {
        objbrowserName = navigator.appName;
       }
      }
      // trimming the fullVersion string at semicolon/space if present
      if ((ix=objfullVersion.indexOf(";"))!=-1)
         objfullVersion=objfullVersion.substring(0,ix);
      if ((ix=objfullVersion.indexOf(" "))!=-1)
         objfullVersion=objfullVersion.substring(0,ix);
      
      objBrMajorVersion = parseInt(''+objfullVersion,10);
      if (isNaN(objBrMajorVersion)) {
       objfullVersion  = ''+parseFloat(navigator.appVersion); 
       objBrMajorVersion = parseInt(navigator.appVersion,10);
      }
      
       
      //  let txt1 = 'Browser name = '+objbrowserName+'<br>'
      //  +'Full version  = '+objfullVersion+'<br>'
      //  +'Major version = '+objBrMajorVersion+'<br>'
      //  +'navigator.appName = '+navigator.appName+'<br>'
      //  +'navigator.userAgent = '+navigator.userAgent+'<br>'
      // ;
      this.osversion =  objbrowserName+"_"+objfullVersion ;
      let forgot_password = {
                               'locale':'eng', 
                               'customerEmail':this.user.email,
                               'os': 'Web',
                               'osVersion' : this.osversion,
                               'appVersion' :"1.0",  
                            }
  let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.forgotpassworddata(forgot_password).subscribe(
        (resp)=>{
          loadingPop.dismiss();
          console.log(resp);
          if (resp.responseStatus.STATUS=="SUCCESS")
          {
            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
           );
           
           this.navCtrl.setRoot(HomePage);     
         }
        else
           {
             this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
          }
        },
        (err)=>{
         loadingPop.dismiss();
        
         this.helperservice.sendalertmessage("bottom","Something went wrong! please try again.");
        }
       );
    }
  }
}
