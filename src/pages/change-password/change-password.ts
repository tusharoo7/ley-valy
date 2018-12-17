import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import {MyAccountPage} from '../my-account/my-account';
/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  public user = {
                  'oldPassword':'',
                  'newPassword':'',
                  'confirmPassword':''
                }
                osversion :any ;
  constructor(public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }
  changepassword()
  {
    if(this.user.oldPassword == undefined || this.user.oldPassword == null || this.user.oldPassword == '' )
    {
      this.helperservice.sendalertmessage('bottom','please enter your old password');
    }
    else if(this.user.oldPassword.length <6)
      {
        this.helperservice.sendalertmessage('bottom','Password Must Minimum Six Charecter Long ');
      }
    else if(this.user.newPassword == undefined || this.user.newPassword == null || this.user.newPassword == '') 
    {
      this.helperservice.sendalertmessage('bottom','please enter your new password ');
    }
    else if(this.user.newPassword.length <6)
      {
        this.helperservice.sendalertmessage('bottom','New Password Must Minimum Six Charecter Long ');
      }
    else if(this.user.confirmPassword == undefined || this.user.confirmPassword == null || this.user.confirmPassword == '') 
    {
      this.helperservice.sendalertmessage('bottom','please enter your confirm password ');
    }
    else if(this.user.confirmPassword!=this.user.newPassword)
    {
      this.helperservice.sendalertmessage('bottom',' confirm password does not match your new password ');
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
      let change_password = {
                               'locale':'eng', 
                                 'os': 'Web',
                               'osVersion' : this.osversion,
                               'appVersion' :"1.0", 
                               'sessionId':localStorage.getItem("customerSessionId"),
                                'customerId':localStorage.getItem("customerId"),
                                'oldPassword':this.user.oldPassword ,
                                  'newPassword':this.user.newPassword, 
                                  'confirmPassword':this.user.confirmPassword, 
                            }
  let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.changepassworddata(change_password).subscribe(
        (resp)=>{
          loadingPop.dismiss();
          console.log(resp);
          if (resp.responseStatus.STATUS=="SUCCESS")
          {
            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
           );
           
           this.navCtrl.setRoot(MyAccountPage);     
         }
        else
           {
             this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
          }
        },
        (err)=>{
         loadingPop.dismiss();
        
         this.helperservice.sendalertmessage("bottom","something went wrong!Please try again.");
        }
       );
    }
  }
}
