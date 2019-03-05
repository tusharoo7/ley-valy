import { Component ,ViewChild } from '@angular/core';
import { NavController, NavParams ,Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MyAccountPage }  from '../my-account/my-account';
import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

import {  ImageCompressService, 
          ResizeOptions, 
          ImageUtilityService, 
          IImage,
          SourceImage } from  'ng2-image-compress';
          import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
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
    imageChangedEvent: any = '';
    croppedImage: any = '';
    data: any;
    @ViewChild('cropper', undefined)
    cropper:ImageCropperComponent;
    cropperSettings: CropperSettings;
    browserDetails :any ;
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
                selectedFile: File;
                base64textString :any;
                image_name : string ;
                image_ext : string ;
                showTitle: boolean = false;
                deviceid : any ;

                processedImages: any;
                

                biofingerprint : any ;
                osversion :any ;
                devicename :any;
                Fingerprint2:any;
  constructor(public platform: Platform ,private imgCompressService: ImageCompressService ,public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) 
  {
  // this.data.image='assets/imgs/pro_pic.jpeg'
    this.base64textString="";
    this.image_name="";
    this.image_ext="";
    this.biofingerprint ="";

    // this.cropperSettings = new CropperSettings();
    // this.cropperSettings.width = 100;
    // this.cropperSettings.height = 100;
    // this.cropperSettings.croppedWidth = 100;
    // this.cropperSettings.croppedHeight = 100;
    // this.cropperSettings.canvasWidth = 400;
    // this.cropperSettings.canvasHeight = 300;
    // this.cropperSettings.rounded=true;

    // this.data = {};

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.rounded=true;
    this.data = {
                  'image':'assets/imgs/pro_pic.jpeg'
                 };
    console.log(this.data);
  }

  // fileChangeListener($event) 
  // {
  //   console.log($event.target.files);
  //   console.log($event.target.files[0]);
  //   var image:any = new Image();
  //   var file:File = $event.target.files[0];
  //   var myReader:FileReader = new FileReader();
  //   var that = this;

  //  let uploadalert = this.helperservice.createLoadingBar_upload();
  //      uploadalert.present();

  //   myReader.onloadend = function (loadEvent:any) {
  //   document.getElementById("cropperbox").style.display = "block";
  //   document.getElementById("savebutton").style.display ="block" ;
  //     //x.style.display = "block";
  //       console.log("fired");
  //       uploadalert.dismiss();
  //       image.src = loadEvent.target.result;
  //       that.cropper.setImage(image);

  //   };

  //  myReader.readAsDataURL(file);
//}
// saveimage()
// {
//   console.log(this.data)
//    var ImageURL = this.data.image;
//    // Split the base64 string in data and contentType
//     var block = ImageURL.split(";");
//    // Get the content type of the image
//     var contentType = block[0].split(":")[1];// In this case "image/gif"
//    // get the real base64 content of the file
//      var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
//      this.base64textString = realData;
//      this.image_ext ="jpeg"

//      document.getElementById("cropperbox").style.display = "none";
//     document.getElementById("savebutton").style.display ="none" ;
// //  // Naming the image
// // const date = new Date().valueOf();
// // let text = '';
// // const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// // for (let i = 0; i < 5; i++) {
// //    text += possibleText.charAt(Math.floor(Math.random() *    possibleText.length));
// // }

// // // Replace extension according to your media type
// // const imageName = date + '.' + text + '.jpeg';

// // // call method that creates a blob from dataUri
// // const imageBlob = this.dataURItoBlob(base64);
// // //var file:File 
// // const imageFile= new File([imageBlob], imageName, { type: 'image/jpeg' });

// // console.log(JSON.stringify(imageFile));
// // console.log(typeof imageFile)
// // let fileList: FileList;
// // fileList[0] = imageFile;
// // console.log(fileList)
// //let images: Array<IImage> = [];

// // ImageCompressService.filesToCompressedImageSource(fileList).then(observableImages => {
// //   observableImages.subscribe((image) => {
// //     images.push(image);
// //   }, (error) => {
// //     console.log("Error while converting");
// //   }, () => {
// //             this.processedImages = images;  
// //             console.log("modifiedimage :");  
// //             console.log( this.processedImages)  ;
            
// //             var str = this.processedImages[0].compressedImage.imageDataUrl;
// //             var ix = str.indexOf(",");
// //             var objfullVersion=str.substring(ix+1);
// //             console.log(objfullVersion)  ;
            
// //             this.base64textString=this.processedImages[0].compressedImage.imageDataUrl;
// //             this.showTitle = true;  
// //             console.log(this.base64textString);        
// //   });
// // });

// }

// dataURItoBlob(dataURI) {
//   const byteString = atob(dataURI);
//   const arrayBuffer = new ArrayBuffer(byteString.length);
//   const int8Array = new Uint8Array(arrayBuffer);

//   for (let i = 0; i < byteString.length; i++) {
//     int8Array[i] = byteString.charCodeAt(i);
//   }
//   const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });    
//   return blob;
// }


  ionViewDidLoad() {
                      console.log('ionViewDidLoad SignupPage');
                      //  console.log(this.platform.platforms());
                      //  var hasConsole = typeof console !== "undefined"
                     function randomString(length, chars) 
                          {
                            var result = '';
                            for (var i = length; i > 0; --i)
                             result += chars[Math.floor(Math.random() * chars.length)];
                            return result;
                          }
                        var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                        console.log(rString);
                        if(localStorage.getItem("deviceid")!="")
                        {
                          localStorage.setItem("deviceid" , rString);
                        //   requestIdleCallback(function () {
                        //     Fingerprint2.get(function (components) {
                        //       console.log(components) // an array of components: {key: ..., value: ...}
                        //       let murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
                        //       //console.log(this.biofingerprint);
                        //       localStorage.setItem("deviceid" , murmur);
                        //     })
                        // })
                        }
      let txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
       txt+= "<p>Browser Name: " + navigator.appName + "</p>";
       txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
       txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
       txt+= "<p>Platform: " + navigator.platform + "</p>";
       txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";

    let positon_one  = navigator.userAgent.indexOf("(");
    let postion_last = navigator.userAgent.indexOf(")");
    var res = navigator.userAgent.slice(positon_one+1, postion_last);//console.log(res);
    var res = navigator.userAgent.slice(positon_one+1, postion_last);//console.log(res);
    var res_devicename = res.split(";");
    this.devicename  =  res_devicename[1];
console.log(txt);
console.log(this.devicename);
// =======================================
//var objappVersion = navigator.appVersion;
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

 
 let txt1 = 'Browser name = '+objbrowserName+'<br>'
 +'Full version  = '+objfullVersion+'<br>'
 +'Major version = '+objBrMajorVersion+'<br>'
 +'navigator.appName = '+navigator.appName+'<br>'
 +'navigator.userAgent = '+navigator.userAgent+'<br>'
;
this.osversion =  objbrowserName+"_"+objfullVersion ;
this.browserDetails = objbrowserName ;
console.log(txt1);



// =======================================
   
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
  //  //var files =  this.processedImages;
  //  var file = files[0];
  //   if (files && file) 
  //   {
  //       var reader = new FileReader();
  //       reader.onload =this._handleReaderLoaded.bind(this);
  //       reader.readAsBinaryString(file);
  //   }

  }
  
  // _handleReaderLoaded(readerEvt) {
  //   var binaryString = readerEvt.target.result;
  //   this.image_name = btoa(binaryString);
  //        //  this.base64textString= 'data:image/png;base64,' + btoa(binaryString);
           
  //         // console.log(btoa(binaryString));
  //  }
  registration_at_leyvalley()
  {
   
      if(this.user.fname=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your first name');
      }
      else if(this.user.lname=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your last name');
      }
      // else if(this.user.enterprice=='')
      // {
      //   this.helperservice.sendalertmessage('bottom','Please Enter Your Enterprice Name');
      // }
      else if(this.user.email == undefined || this.user.email == null || this.user.email == '' )
      {
        this.helperservice.sendalertmessage('bottom','Please enter your email');
      }
      else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.user.email)) 
      {
        this.helperservice.sendalertmessage('bottom','Please enter proper email ');
      }
      else if(this.user.password=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your password');
      }
      else if(this.user.password.length <6)
      {
        this.helperservice.sendalertmessage('bottom','Password must be minimum 6 charecter long ');
      }
      // else if(this.user.position=='')
      // {
      //   this.helperservice.sendalertmessage('bottom','Please Enter Your Position');
      // }
      // else if(this.user.mobile=='')
      // {
      //   this.helperservice.sendalertmessage('bottom','Please Enter Your Mobile No');
      // }
      // else if(this.user.phone=='')
      // {
      //   this.helperservice.sendalertmessage('bottom','Please Enter Your Phone No');
      // }
      
      
      else
      {
        let loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();

        
        localStorage.getItem("deviceid");
       let registration_json = {
                                'locale':'eng', 
                                'customerFirstName':this.user.fname, 
                                'customerLastName':this.user.lname, 
                                'customerEmail':this.user.email, 
                                'customerPassword':this.user.password, 
                                'customerMobile':this.user.mobile, 
                                'customerPhone':this.user.phone, 
                                'deviceId': localStorage.getItem("deviceid"), 
                                'customerEnterprise':this.user.enterprice, 
                                'pushNotificationToken':'', 
                                'simOperatorName':'', 
                                'os':'Web', 
                                'customerPosition':this.user.position, 
                                'profilePic':this.image_name, 
                                'profilePicExt':this.image_ext,
                                'registrationType':'GEN', 
                                'osVersion':this.osversion, 
                                'appVersion':'1.0', 
                                'deviceName':this.devicename, 
                                'deviceAndroidID':"", 
                                'deviceWifiMacID':"", 
                                'simSerialNo':"",
                                'browserDetails':this.browserDetails
                               }
                              
                               
         console.log(registration_json);
        //  this.globalservice.signup_in_tilkee(registration_json).subscribe((resp) => {
        //         loadingPop.dismiss();
        //         console.log(resp);
              // this.navCtrl.push(HomePage);
              //    if (resp.responseStatus.STATUS=="SUCCESS")
              //    {
              //      //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
              //     //);
              //     localStorage.setItem("customerId" , resp.responseData.customerId);
              //     localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
              //     localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
              //     localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
              //     localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
              //     localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
              //     localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
              //     localStorage.setItem('customerPosition',resp.responseData.customerPosition);
              //     localStorage.setItem('customerMobile',resp.responseData.customerMobile);
              //     localStorage.setItem('customerPhone',resp.responseData.customerPhone);
           
              //     this.navCtrl.setRoot(MyAccountPage);     
              //   }
              //  else
              //     {
              //       this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
              //    }
        //  }, (err) => 
        //  {
        //   this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
        // });                         
        this.globalservice.siginup(registration_json).subscribe((resp) => {
                loadingPop.dismiss();
                console.log(resp);
              // this.navCtrl.push(HomePage); 
                 if (resp.responseStatus.STATUS=="SUCCESS")
                 {
                  this.globalservice.signup_in_tilkee(registration_json).subscribe(
                    (resp)=>{
                      console.log('tilkee user registration')
                      console.log(resp)
                    },
                  (err)=>{
                    console.log(err)
                  })
                   //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE
                  //);
                  localStorage.setItem("customerId" , resp.responseData.customerId);
                  localStorage.setItem("customerEmail" , resp.responseData.customerEmail);
                  localStorage.setItem("customerFirstName" ,  resp.responseData.customerFirstName);
                  localStorage.setItem("customerLastName" , resp.responseData.customerLastName);
                  localStorage.setItem("customerProfilePic" , resp.responseData.customerProfilePic);
                  localStorage.setItem("customerSessionId" , resp.responseData.customerSessionId);
                  localStorage.setItem('customerEnterprise',resp.responseData.customerEnterprise);
                  localStorage.setItem('customerPosition',resp.responseData.customerPosition);
                  localStorage.setItem('customerMobile',resp.responseData.customerMobile);
                  localStorage.setItem('customerPhone',resp.responseData.customerPhone);
           
                  this.navCtrl.setRoot(MyAccountPage);     
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
  gosignin()
  {
    this.navCtrl.push(HomePage);
  }
}
