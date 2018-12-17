import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { MyAccountPage } from '../my-account/my-account';
import {  ImageCompressService, 
  ResizeOptions, 
  ImageUtilityService, 
  IImage,
  SourceImage } from  'ng2-image-compress';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
 public user : any ;
 selectedFile: File;
 processedImages: any;
 image_name : string = "" ;
 image_ext : string = "" ;
 showTitle: boolean = false;
 base64textString :any =""; 
 osversion :any ;
  constructor(private imgCompressService: ImageCompressService ,public globalservice: GlobalValueProvider,public helperservice : HelperService , public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      'customerId':localStorage.getItem("customerId"), 
      'customerEmail': localStorage.getItem("customerEmail"), 
      'customerFirstName':localStorage.getItem("customerFirstName"), 
      'customerLastName':localStorage.getItem("customerLastName"), 
      'customerProfilePic':localStorage.getItem("customerProfilePic"), 
      'customerSessionId':localStorage.getItem("customerSessionId"), 
      'customerEnterprise':localStorage.getItem("customerEnterprise"),
      'customerPosition':  localStorage.getItem('customerPosition'),
      'customerMobile' :localStorage.getItem("customerMobile"),
      'customerPhone' :localStorage.getItem("customerPhone")
   }
  }

  ionViewDidLoad() {
           if( localStorage.getItem("customerId")!="" && localStorage.getItem("customerEmail")!="" && localStorage.getItem("customerSessionId")!="")
           {
            console.log('ionViewDidLoad ProfilePage');
          // console.log(this.base64textString);
            var objAgent = navigator.userAgent;
            var objbrowserName  = navigator.appName;
            var objfullVersion  = ''+parseFloat(navigator.appVersion); 
            var objBrMajorVersion = parseInt(navigator.appVersion,10);
            var objOffsetName,objOffsetVersion,ix;
            // In Chrome 
            if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) 
            {
            objbrowserName = "Chrome";
            objfullVersion = objAgent.substring(objOffsetVersion+7);
            }
            // In Microsoft internet explorer
            else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) 
            {
            objbrowserName = "Microsoft Internet Explorer";
            objfullVersion = objAgent.substring(objOffsetVersion+5);
            }
            // In Firefox
            else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) 
            {
            objbrowserName = "Firefox";
            }
            // In Safari 
            else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) 
            {
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

            this.osversion =  objbrowserName+"_"+objfullVersion ;
          //  alert(localStorage.getItem("customerEnterprise"));
            if(localStorage.getItem("customerEnterprise")== 'null' )
              {
               this.user.customerEnterprise="";
              }
              
              if(localStorage.getItem("customerPosition")== 'null' )
              {
               this.user.customerPosition="";
              }
              if(localStorage.getItem("customerPhone")== 'null' )
              {
               this.user.customerPhone="";
              }
              
           }
           else
           {
            this.navCtrl.setRoot(HomePage); 
           }
  }

  onFileChanged(event)
  {
   this.selectedFile = event.target.files[0]
    let fileList: FileList;
    let images: Array<IImage> = [];

   ImageCompressService.filesToCompressedImageSource(event.target.files).then(observableImages => {
     observableImages.subscribe((image) => {
       images.push(image);
     }, (error) => {
       console.log("Error while converting");
     }, () => {
               this.processedImages = images;  
               console.log("modifiedimage :");  
               console.log( this.processedImages)  ;
               
               var str = this.processedImages[0].compressedImage.imageDataUrl;
               var ix = str.indexOf(",");
               var objfullVersion=str.substring(ix+1);
               console.log(objfullVersion)  ;
               this.image_name=objfullVersion;
               this.base64textString=this.processedImages[0].compressedImage.imageDataUrl;
               this.showTitle = true;          
     });
   });

  // console.log(this.selectedFile)
   let image_name = this.selectedFile.name ;
   var res_img = image_name.split(".");

   this.image_ext= res_img[1];
  // console.log(this.image_ext);
  var files = event.target.files;

 }
  update_profile()
  {
    // check any new image uploaded or not 
    if(this.image_name=="" && this.image_ext =="")
    {
    //   console.log('sasa');
    //   let imgstr = this.user.customerProfilePic;
    //   let  img_string =imgstr.lastIndexOf('/')+1
    //   let res = imgstr.substring(img_string);
    //   let img_ext = res.substring(res.lastIndexOf('.')+1) 
    //   let img_name = res.substring(0,res.lastIndexOf('.'))
    // //document.getElementById("demo").innerHTML = img_ext + img_name;
    // this.image_name = img_name ;
    // this.image_ext = img_ext ;
    }
    else
    {
      console.log('sasaddd');
      this.image_name = this.image_name ;
       this.image_ext = this.image_ext;
    }
    if(this.user.customerFirstName=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your first name');
      }
      else if(this.user.customerLastName=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your last name');
      }
      // else if(this.user.enterprice=='')
      // {
      //   this.helperservice.sendalertmessage('bottom','Please Enter Your Enterprice Name');
      // }
      else if(this.user.customerEmail == undefined || this.user.customerEmail == null || this.user.customerEmail == '' )
      {
        this.helperservice.sendalertmessage('bottom','Please enter your email');
      }
      else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.customerEmail)) 
      {
        this.helperservice.sendalertmessage('bottom','Please enter proper email ');
      } 
      else
      {
        let loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();

        
        localStorage.getItem("deviceid");
       let update_json = {
                                'locale':'en', 
                                'customerFirstName':this.user.customerFirstName, 
                                'customerLastName':this.user.customerLastName, 
                                'customerEmail':this.user.customerEmail, 
                                'customerMobile':this.user.customerMobile, 
                                'customerPhone':this.user.customerPhone, 
                                'sessionId':this.user.customerSessionId ,
                                'customerEnterprise':this.user.customerEnterprise, 
                                'isPushNotification':'N', 
                                'os':'Web', 
                                'customerPosition':this.user.customerPosition, 

                                'profilePic':this.image_name, 
                                'profilePicExt':this.image_ext,

                                'registrationType':'GEN', 
                                'osVersion':this.osversion, 
                                'appVersion':'1.0', 
                                'customerId':this.user.customerId
                               }
                              
                               
         console.log(update_json);

        this.globalservice.update_profile(update_json).subscribe((resp) => {
                loadingPop.dismiss();
                console.log(resp);
              // this.navCtrl.push(HomePage);
                 if (resp.responseStatus.STATUS=="SUCCESS")
                 {
                   //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                  //);
                  localStorage.setItem("customerId" , resp.responseData.customerId);
                  localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
                  localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
                  localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
                  localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
                 // localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
                  localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
                  localStorage.setItem('customerPosition',resp.responseData.customerPosition);
                  localStorage.setItem('customerMobile',resp.responseData.customerMobile);
                  localStorage.setItem('customerPhone',resp.responseData.customerPhone);
           
                 // this.navCtrl.push(ProfilePage); 
                  this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);    
                }
               else
                  {
                    this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                 }
         }, (err) => 
         {
          this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
        });   

  }
}

//import { MyAccountPage } from '../my-account/my-account';
got_to_home()
{
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}
}
