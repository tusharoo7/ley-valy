import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BussinesscardDetailsPage } from '../bussinesscard-details/bussinesscard-details';
import {BussinesscardAddPage} from '../bussinesscard-add/bussinesscard-add'
import {BussinesscardEditPage} from '../bussinesscard-edit/bussinesscard-edit';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';
import { MyAccountPage } from '../my-account/my-account';

import {  ImageCompressService, 
  ResizeOptions, 
  ImageUtilityService, 
  IImage,
  SourceImage } from  'ng2-image-compress';


/**
 * Generated class for the BussinesscardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-bussinesscard',
  templateUrl: 'bussinesscard.html',
})
export class BussinesscardPage {
  osversion :any;
  public card_list :any;
  public store_card_list :any;
  selectedFile: File;
  base64textString :any="";
  image_base64_raw :any = "" ;
  camcardresp :any;
  processedImages: any;
  image_name: any; 
  showTitle: any; 
  image_ext: any;
  loadingPop:any;
  search:any = "" ;

  public show:boolean = false;
  constructor(public helperservice : HelperService ,public globalservice: GlobalValueProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  // GENERATE LIST OF BUISNESS CARD
  ionViewDidEnter()
  {
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
    let getallcards = {
                          'sessionId':localStorage.getItem('customerSessionId'), 
                          'osVersion':this.osversion, 
                          'appVersion':'1.0', 
                          'customerId':localStorage.getItem("customerId"), 
                          'os':'Web', 
                          'startingRecordNo':'0', 
                          'locale':'en'
                        }
                      //  console.log(getallcards);
                        this.loadingPop = this.helperservice.createLoadingBar();
                        this.loadingPop.present();
                
                        this.globalservice.list_bisnes_card(getallcards).subscribe((resp) => {
                          this.loadingPop.dismiss();
                         // console.log(resp);
                        // // this.navCtrl.push(HomePage);
                           if (resp.responseStatus.STATUS=="SUCCESS")
                            {
                              this.card_list =  resp.responseData
                              this.store_card_list =this.card_list ;
                          }
                          else if(resp.responseStatus.STATUS=="FAILED" && resp.responseStatus.STATUSCODE== "210")
                          {
                            this.helperservice.backtohome();
                          }
                          else
                            {
                              this.card_list = ""
                            }
                   }, (err) => 
                   {
                    this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                  });   
                                      
   // console.log('ionViewDidLoad BussinesscardPage');
  }
  // GO TO BUISNESS-CARD DETAILS PAGE
  gobussinesscarddetails() 
  {
    this.navCtrl.push(BussinesscardDetailsPage);
  }
  // ADD NEW BUISNESS-CARD
  scan_bcard()
  {
    this.navCtrl.push(BussinesscardAddPage)
  }
// VIEW DETAILS OF BUISNESS-CARD
  view_details(cardid)
  {
    this.navCtrl.push(BussinesscardDetailsPage,{cardid:cardid})
  }
// ITS USED TO CONVERT FILE TO BASE 64 ENCODED FORMAT
  onFileChanged(event) 
  {
    this.selectedFile = event.target.files[0]
    //console.log(this.selectedFile )
    let image_name = this.selectedFile.name ;
   // console.log(image_name);
    var res_img = image_name.split(".");
     this.image_ext= res_img[1];
   // console.log(this.image_ext);

   function randomString(length, chars) 
   {
     var result = '';
     for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
     return result;
   }
   var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


    let fileList: FileList;
    let images: Array<IImage> = [];

   ImageCompressService.filesToCompressedImageSource(event.target.files).then(observableImages => {
     observableImages.subscribe((image) => {
       images.push(image);
     }, (error) => {
       console.log("Error while converting");
     }, () => {
               this.processedImages = images;  
               //console.log("modifiedimage :");  
               //console.log( this.processedImages)  ;
               
               var str = this.processedImages[0].compressedImage.imageDataUrl;
               var ix = str.indexOf(",");
               var objfullVersion=str.substring(ix+1);
               //console.log(objfullVersion)  ;
               this.image_name=objfullVersion;
               this.base64textString=this.processedImages[0].compressedImage.imageDataUrl;
               //console.log(this.base64textString)  ;
               this.showTitle = true; 
               let camcarddata = {
                'locale':'eng',
                'deviceId':rString,
                'os':'Web',
                'osVersion':localStorage.getItem('osVersion'),
                'appVersion':'1.0',
                'customerId':localStorage.getItem('customerId'),
                'sessionId':localStorage.getItem('customerSessionId'),
                'cardPic':this.image_name, 
                'cardPicExt':this.image_ext
              }
              console.log(camcarddata)
              this.loadingPop = this.helperservice.createLoadingBar();
              this.loadingPop.present();
         this.globalservice.callcamcardapi(camcarddata).subscribe(
                (resp)=>{
                  console.log(resp)
                          this.loadingPop.dismiss(); 
                          if(resp.responseStatus.STATUS=='SUCCESS' && resp.responseStatus.STATUSCODE=='200' )
                          {
                            
                            //this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                            this.navCtrl.push(BussinesscardEditPage,{data:JSON.parse(resp.responseData.jsonResponse),image_base64_raw:this.image_name,image:this.base64textString})
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='601')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='500')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='210')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                            this.helperservice.backtohome()
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='300')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                          // added by tushar on 6th february 2019
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='602')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='603')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                          else if(resp.responseStatus.STATUS=='FAILED' && resp.responseStatus.STATUSCODE=='605')
                          {
                            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
                          }
                },
                  (err)=>{
                          this.loadingPop.dismiss(); 
                          this.helperservice.sendalertmessage('bottom',err);
                  }
               ) 
       
     });
   });
  
  }

// GO TO DASHBOARD PAGE
   got_to_home()
   {
     const index = this.navCtrl.getActive().index;
     this.navCtrl.remove(0, index);
     this.navCtrl.setRoot(MyAccountPage)
   }
// Get search data
   getsearchdata()
   {
    if(this.search=='')
    {
      this.helperservice.sendalertmessage('bottom','Please enter your search text');
    }
    else
    {
          console.log(this.search)
 let searchjson={
                  'sessionId':localStorage.getItem('customerSessionId'), 
                  'osVersion':this.osversion, 
                  'appVersion':'1.0', 
                  'customerId':localStorage.getItem("customerId"), 
                  'os':'Web', 
                  'startingRecordNo':'0', 
                  'locale':'en',
                  'searchKey':this.search
                   }
                   this.loadingPop = this.helperservice.createLoadingBar();
              this.loadingPop.present();
this.globalservice.search_bisnes_card(searchjson).subscribe(
                    (resp)=>{
                      console.log(resp),
                      this.loadingPop.dismiss();
                      if (resp.responseStatus.STATUS=="SUCCESS" &&  resp.responseStatus.STATUSCODE=='200' )
                      {
                        this.card_list =  resp.responseData;
                        this.show=true;
                      //  const resetbutton = document.getElementsByClassName("reset-class") as HTMLCollectionOf<HTMLElement>;
                      //  resetbutton.style.display = "block";
                       // <HTMLElement>document.querySelector('#yourDomElmentID')).style.display = 'none';
                    }
                    else if(resp.responseStatus.STATUS=="FAILED" && resp.responseStatus.STATUSCODE== "213")
                    {
                      this.card_list = ""
                      this.show=true;
                    }
                    else
                      {
                        this.card_list = ""
                        this.show=true;
                      }
                    },
                    (err)=>{ this.helperservice.sendalertmessage('bottom',err);}
                   )
                }
   }
// reset seach data
   reset_search()
   {
    this.search='';
    this.card_list = this.store_card_list;
    this.show=false;
    
   }
  

}
