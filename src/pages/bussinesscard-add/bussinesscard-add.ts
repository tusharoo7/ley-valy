import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {BussinesscardEditPage} from '../bussinesscard-edit/bussinesscard-edit';

import {BussinesscardPage}  from '../bussinesscard/bussinesscard';

import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';

import {  ImageCompressService, 
  ResizeOptions, 
  ImageUtilityService, 
  IImage,
  SourceImage } from  'ng2-image-compress';
import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the BussinesscardAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage({name:"add_card"})
@Component({
  selector: 'page-bussinesscard-add',
  templateUrl: 'bussinesscard-add.html',
})
export class BussinesscardAddPage {
  img: any;
  imgData: any = [];
  imgDataView: any = [];
  f_type: any;
  camcardresp :any;
  selectedFile: File;
  base64textString :any="";
  osversion :any ;
  processedImages: any;
 image_name : string = "" ;
 image_ext : string = "" ;
 showTitle: boolean = false;
  public user = {
                  'firstName':'', 
                  'lastName':'', 
                  'company':'', 
                  'position':'', 
                  'mobile':'', 
                  'phone':'', 
                  'email':'',
                  'remarks':'' 
                 }

  constructor(public helperservice : HelperService ,public globalservice: GlobalValueProvider,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BussinesscardAddPage');

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
  }
// go to buisnes card list page 
  back_to_list()
  {
    this.navCtrl.pop();
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

  // console.log(this.selectedFile) processedImages image_name showTitle image_ext
   let image_name = this.selectedFile.name ;
   var res_img = image_name.split(".");

   this.image_ext= res_img[1];
  // console.log(this.image_ext);
  var files = event.target.files;

 }
  
// crete new card 
   add_new_card()
   {
    if(this.user.firstName=='')
    {
      this.helperservice.sendalertmessage('bottom','Please enter your first name');
    }
    else if(this.user.lastName=='')
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
    else
    {
      let loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();

      let add_card  = {
                         'locale' :'en' ,
                         'firstName' : this.user.firstName , 
                         'lastName': this.user.lastName,
                         'email' : this.user.email,
                         'mobile': this.user.phone , 
                         'phone':this.user.phone, 
                         'sessionId':localStorage.getItem('customerSessionId'), 
                         'company':this.user.company, 
                         'os':'Web',
                         'position':this.user.position,
                         'cardPic':this.image_name,
                         'cardPicExt':this.image_ext,
                         'osVersion':this.osversion,
                         'appVersion':'1.0',
                         'customerId':localStorage.getItem("customerId"),
                         'jsonResponse':'{}', 
                         'cardId':'',
                         'caller':'General',
                         'remarks':this.user.remarks
                      }

       console.log(add_card) ; 
       
       
       this.globalservice.add_bisnes_card(add_card).subscribe((resp) => {
        loadingPop.dismiss();
        console.log(resp);
      // this.navCtrl.push(HomePage);
         if (resp.responseStatus.STATUS=="SUCCESS")
         {
          
          this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);   
          this.navCtrl.push(BussinesscardPage); 
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

// GO TO DASHBOARD PAGE
got_to_home()
{console.log("dsds")
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}
}
