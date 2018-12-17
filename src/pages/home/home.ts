import { Component } from '@angular/core';
import { NavController ,MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { MyAccountPage }  from '../my-account/my-account';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import {
  SocialLoginModule,
  AuthService,
 
  LinkedinLoginProvider
} from "angular5-social-auth";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  osversion :any ;
  devicename :any;
  deviceid : any ;
  browserDetails:any;
  rString :any;
  public user = {
                  'password':'', 
                   'email':''
                 }
  constructor(private socialAuthService: AuthService, private menuCtrl: MenuController , public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController) {
    //this.menuCtrl.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    // the root left menu should be disabled on this page
    let positon_one  = navigator.userAgent.indexOf("(");
    let postion_last = navigator.userAgent.indexOf(")");
    var res = navigator.userAgent.slice(positon_one+1, postion_last);//console.log(res);
    var res = navigator.userAgent.slice(positon_one+1, postion_last);//console.log(res);
    var res_devicename = res.split(";");
    this.devicename  =  res_devicename[1];
//console.log(txt);
//console.log(this.devicename);
// =======================================
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
this.browserDetails = objbrowserName ;

    this.menuCtrl.enable(false,'myMenu');
   console.log(this.menuCtrl.isEnabled('myMenu')) ;
   this.menuCtrl.swipeEnable(false, 'myMenu');
    if(localStorage.getItem("customerSessionId")==null || localStorage.getItem("customerSessionId")=="" )
     {
      
     // this.navCtrl.setRoot(HomePage);
     }
     else
     {
      this.navCtrl.setRoot(MyAccountPage);
     }

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
    let randomstring = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    this.rString = randomstring
    if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
    {
      this.helperservice.sendalertmessage('bottom','Please enter your email');
    }
    else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email.trim())) 
    {
      this.helperservice.sendalertmessage('bottom','Please enter proper email ');
    }
     else if(this.user.password=='')
    {
      this.helperservice.sendalertmessage('bottom','Please enter your password');
    }
     else
    {

      console.log(this.rString);
      if("deviceId" in localStorage){
        this.rString = localStorage.getItem("deviceId")
     } 
     else 
     {
       
     }
        
    //  if(localStorage.getItem("deviceId")!="" || localStorage.getItem("deviceId")!=undefined )
    //  {
    //    console.log('old deviceid '+localStorage.getItem("deviceId"))
      
    //    console.log('did1'+this.rString);
    //  }
    //  else
    //  {
    //   //this.rString = randomstring
    //   console.log('did2'+this.rString);
    //  }
     
      let login_json = {
                         'locale':'eng', 
                         'customerEmail':this.user.email,
                         'customerPassword':this.user.password, 
                         'deviceId': this.rString,
                         'pushNotificationToken':'', 
                         'simOperatorName':'', 
                         'os':'Web', 
                         'loginType':'GEN',
                         'osVersion':this.osversion,
                         'appVersion':"1.0",
                         'deviceName':this.devicename, 
                         'deviceAndroidID':"",
                         'deviceWifiMacID':"",
                          'simSerialNo':""
                        }
                        console.log(login_json);

  let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();

//   let TIME_IN_MS = 1500;
//  setTimeout( () => {
//     loadingPop.dismiss();
//          this.navCtrl.setRoot(MyAccountPage);
// }, TIME_IN_MS);
      this.globalservice.signin(login_json).subscribe(
        (resp)=>{
          loadingPop.dismiss();
          console.log(resp);
          if (resp.responseStatus.STATUS=="SUCCESS")
          {
          //  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
          // );
           localStorage.setItem("customerId" , resp.responseData.customerId);
           localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
           localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
           localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
           localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
           localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
           localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
           localStorage.setItem('customerPosition',resp.responseData.customerPosition);
           localStorage.setItem('customerMobile',resp.responseData.customerMobile);

           if("deviceId" in localStorage)
           {
             // this.rString = localStorage.getItem("deviceId")
           } 
          else 
          {
            localStorage.setItem('deviceId',this.rString);
          }
          // localStorage.setItem('deviceId',randomstring) ;



           localStorage.setItem('customerPhone',resp.responseData.customerPhone);
           localStorage.setItem('osVersion',this.osversion);
           this.navCtrl.setRoot(MyAccountPage);     
         }
        else
           {
             this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
          }
       },
       (err)=>{
       loadingPop.dismiss();
        
        this.helperservice.sendalertmessage("bottom","Something went wrong!Please try again.");
       }
      );
    }
  }

  golinkdin_signup(socialPlatform : string)
  {
    let socialPlatformProvider;
    if(socialPlatform == "linkedin"){
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    function randomString(length, chars) 
                          {
                            var result = '';
                            for (var i = length; i > 0; --i)
                             result += chars[Math.floor(Math.random() * chars.length)];
                            return result;
                          }
                        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        console.log(userData.id);
        //let userdata = JSON.parse(userData)
        // Now sign-in with userData
         let cname = userData.name.split(' ')

         if(localStorage.getItem("deviceId")!="")
         {
           console.log('old deviceid '+localStorage.getItem("deviceId"))
           this.rString = localStorage.getItem("deviceId")
           console.log('did1'+this.rString);
         }
         else
         {
          this.rString = rString
          console.log('did2'+this.rString);
         }
        let linkdinlogin = {   'locale':'eng', 
                               'customerFirstName':cname[0],
                               'customerLastName':cname[1], 
                               'customerEmail':userData.email,
                               'deviceId':this.rString,
                               'pushNotificationToken':'',
                               'simOperatorName':'',
                               'os':'Web',
                               'profilePicUrl':userData.image,
                               'registrationType': 'LINK',
                               'osVersion':this.osversion,
                               'appVersion':'1.0',
                               'deviceName':this.devicename,
                               'deviceAndroidID':"",
                               'deviceWifiMacID':"",
                               'simSerialNo':"",
                               'browserDetails':this.browserDetails,
                               'socialId':userData.id
                            }
              console.log(linkdinlogin) ;   
              let loadingPop = this.helperservice.createLoadingBar();
              loadingPop.present();
              this.globalservice.customersociallogin(linkdinlogin).subscribe(
                
                (resp)=>{if (resp.responseStatus.STATUS=="SUCCESS")
                {
                  loadingPop.dismiss();
                 console.log(resp);
                //  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                // );
                 localStorage.setItem("customerId" , resp.responseData.customerId);
                 localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
                 localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
                 localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
                 localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
                 localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
                 localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
                 localStorage.setItem('customerPosition',resp.responseData.customerPosition);
                 localStorage.setItem('customerMobile',resp.responseData.customerMobile);
                 if(localStorage.getItem("deviceId")!="")
           {
             
           }
           else
           {
            localStorage.setItem('deviceId',this.rString) ;
           }
      
                 localStorage.setItem('customerPhone',resp.responseData.customerPhone);
                 localStorage.setItem('osVersion',this.osversion);
                 this.navCtrl.setRoot(MyAccountPage);     
               }
              else
                 {
                   this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                }},(err)=>{loadingPop.dismiss();
        
                  this.helperservice.sendalertmessage("bottom","Something went wrong!Please try again.");}
              )

      }
    );
  }
  randomString(length, chars) 
      {
        var result = '';
        for (var i = length; i > 0; --i)
         result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      }
}
