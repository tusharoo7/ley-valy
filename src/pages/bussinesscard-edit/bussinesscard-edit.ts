import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { empty } from 'rxjs/observable/empty';
import {  ImageCompressService, 
  ResizeOptions, 
  ImageUtilityService, 
  IImage,
  SourceImage } from  'ng2-image-compress';

import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';
import {BussinesscardPage}  from '../bussinesscard/bussinesscard';
  import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the BussinesscardEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bussinesscard-edit',
  templateUrl: 'bussinesscard-edit.html',
})
export class BussinesscardEditPage {
  card_details :any ;
  titel :any ;
  osversion :any ;
public uploadedimage : any ="" ;  
public camcardresponse : any ="" ;
selectedFile: File;
base64textString :any="";
processedImages: any;
image_name : string = "" ;
image_ext : string = "" ;
remarks: string = "" ;
showTitle: boolean = false;
validation : any=""
/// store camcard image data card_holder_firstName card_holder_lastName card_holder_position card_holder_company
public card_holder_name : string ;
public card_holder_firstName : string ; 
public card_holder_lastName : string ;
public card_holder_email :string ;
public card_holder_position :string ;
public card_holder_company :string ;
public card_holder_contact_one :any ;
public card_holder_contact_two :any ;
public card_holder_office_address :string ;
public card_holder_office_website :string ;
public card_holder_id : any ;
public json_response  : any ;
public caller :string
  constructor(public helperservice : HelperService ,public globalservice: GlobalValueProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.card_details = navParams.get('card_details');
    this.camcardresponse = navParams.get('data');
    
    console.log(this.camcardresponse);
    console.log(JSON.stringify(this.camcardresponse));
    console.log(this.card_details);
    // check all data 

    if(this.camcardresponse!=undefined && this.camcardresponse!="")
    {
      this.titel = "Add"
      this.uploadedimage =  navParams.get('image');
      this.image_name = navParams.get('image_base64_raw');
      this.image_ext = "png";
      this.card_holder_id= "" ;
      this.json_response =  JSON.stringify(this.camcardresponse) ;
      this.caller ='General';
     
      if(this.camcardresponse.hasOwnProperty("formatted_name"))
      {
       

         if(this.camcardresponse.formatted_name[0].item!=undefined
           && this.camcardresponse.formatted_name[0].item!=null 
           && this.camcardresponse.formatted_name[0].item!="" )
           {
            this.card_holder_name =  this.camcardresponse.formatted_name[0].item ;
           }
           else
           {
            this.card_holder_name =""
           }
      }
      else
      {
       this.card_holder_name =""
      }


      if(this.camcardresponse.hasOwnProperty("email"))
      {
        console.log("b1");
       if(this.camcardresponse.email[0].item!=undefined
         && this.camcardresponse.email[0].item!=null 
         && this.camcardresponse.email[0].item!="" )
         {
           this.card_holder_email =  this.camcardresponse.email[0].item ;
         }
         else
         {
           this.card_holder_email = "";
         }
      }
      else
      {
      
       this.card_holder_email = "";
      }
      
      if(this.camcardresponse.hasOwnProperty("title"))
      {
       if(this.camcardresponse.title[0].item!=undefined
         && this.camcardresponse.title[0].item!=null 
         && this.camcardresponse.title[0].item!="" )
         {
           this.card_holder_position =  this.camcardresponse.title[0].item ;
         }
         else
         {
           this.card_holder_position  =""
         }
      }
      else
      {
       this.card_holder_position  =""
      }

      if(this.camcardresponse.hasOwnProperty("organization"))
      {
       if(this.camcardresponse.organization[0].item.name!=undefined
         && this.camcardresponse.organization[0].item.name!=null 
         && this.camcardresponse.organization[0].item.name!="" )
         {
           this.card_holder_company =  this.camcardresponse.organization[0].item.name ;
         }
         else
         {
          this.card_holder_company =""
         } 
      }
      else
      {
       this.card_holder_company = ""
      }

               
      if(this.camcardresponse.hasOwnProperty("telephone"))
      {
        console.log(Object.keys(this.camcardresponse.telephone).length);

        if(Object.keys(this.camcardresponse.telephone).length==1)
        {
          if(this.camcardresponse.telephone[0].item.number!=undefined
            && this.camcardresponse.telephone[0].item.number!=null 
            && this.camcardresponse.telephone[0].item.number!="" )
            {
              this.card_holder_contact_one =  this.camcardresponse.telephone[0].item.number ;
            }
            else
            {
             this.card_holder_contact_one =""
            }
          this.card_holder_contact_two =""
        }
        else
        {
          if(this.camcardresponse.telephone[0].item.number!=undefined
            && this.camcardresponse.telephone[0].item.number!=null 
            && this.camcardresponse.telephone[0].item.number!="" )
            {
              this.card_holder_contact_one =  this.camcardresponse.telephone[0].item.number ;
            }
            else
            {
             this.card_holder_contact_one =""
            }

          if( this.camcardresponse.telephone[1].item.number!=undefined
            &&  this.camcardresponse.telephone[1].item.number!=null 
            && this.camcardresponse.telephone[1].item.number!="" )
            {
              this.card_holder_contact_two =  this.camcardresponse.telephone[1].item.number ;
            }
            else
            {
             this.card_holder_contact_two =""
            }
        }
        
      }
      else
      {
        this.card_holder_contact_one =""
        this.card_holder_contact_two =""
      }
      
      if(this.camcardresponse.hasOwnProperty("address"))
      {
        if(this.camcardresponse.address[0].item.street!=undefined
          && this.camcardresponse.address[0].item.street!=null 
          && this.camcardresponse.address[0].item.street!="" )
          {
            if(this.camcardresponse.address[0].item.hasOwnProperty("postal_code"))
            {
              console.log("b2");
              this.card_holder_office_address = this.camcardresponse.address[0].item.street +', P.O :'+this.camcardresponse.address[0].item.postal_code
            }
            else
            {
              this.card_holder_office_address =  this.camcardresponse.address[0].item.street ;
            }
            
    
          }
          else
          {
           this.card_holder_office_address =""
          }
      }
      else
      {
        this.card_holder_office_address =""
      }
      if(this.camcardresponse.hasOwnProperty("url"))
      {
        if(this.camcardresponse.url[0].item!=undefined
          && this.camcardresponse.url[0].item!=null 
          && this.camcardresponse.url[0].item!="" )
          {
            this.card_holder_office_website =  this.camcardresponse.url[0].item ;
          }
          else
          {
            this.card_holder_office_website =""
          }
      }
      else
      {
        this.card_holder_office_website =""
      }

    }
   
   
      
    if(this.card_details!=undefined && this.card_details!="")
    { 
      this.titel = "Save"
      this.caller ='Camcard';
      this.card_holder_office_address ="";
      this.card_holder_office_website ="";
      this.card_holder_company =this.card_details.company;
      this.card_holder_position = this.card_details.position ;
      this.uploadedimage =this.card_details.cardPic;
      this.card_holder_firstName  = this.card_details.firstName
      this.card_holder_lastName =  this.card_details.lastName
      this.card_holder_name = ""; 
      this.remarks = this.card_details.remarks
      this.card_holder_email = this.card_details.email;
      this.card_holder_contact_one = this.card_details.mobile ;
      this.card_holder_contact_two = this.card_details.phone ;
    }
    
            
            
    
               
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BussinesscardEditPage');


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
// ADD NEW BUISNESS CARD
  add_new_card()
  {
     
    // if data edit from normal card edit {start}
    if(this.card_details!=undefined && this.card_details!="")
    {
      if(this.card_holder_firstName=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your first name');
      }
      else if(this.card_holder_lastName=='')
      {
        this.helperservice.sendalertmessage('bottom','Please enter your last name');
      }
      else if(this.card_holder_email == undefined || this.card_holder_email == null || this.card_holder_email == '' )
      {
        this.helperservice.sendalertmessage('bottom','Please enter your email');
      }
      else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.card_holder_email)) 
      {
        this.helperservice.sendalertmessage('bottom','Please enter proper email ');
      }
      else
      {
         this.validation = 1;
      }
      this.card_holder_id= this.card_details.cardId ;
      this.json_response =  '{}' ;
    }

    // if data edit from normal card edit {end}

    // if data edit from camcard  card edit {start}
    if(this.camcardresponse!=undefined && this.camcardresponse!="")
    {
       if(this.card_holder_name =='')
      { 
        this.helperservice.sendalertmessage('bottom','Please enter your  name');
      }
     
      else if(this.card_holder_email == undefined || this.card_holder_email == null || this.card_holder_email == '' )
      {
        this.helperservice.sendalertmessage('bottom','Please enter your email');
      }
      else if(  !new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.card_holder_email)) 
      {
        this.helperservice.sendalertmessage('bottom','Please enter proper email ');
      }
      else
      {
         this.validation = 1;
      }
      let username = this.card_holder_name.split(' ');
       
       this.card_holder_firstName = username[0];
       this.card_holder_lastName = username[1];
    }
    
   if(this.validation==1)
   {
              let loadingPop = this.helperservice.createLoadingBar();
              loadingPop.present();  
          let add_card  = {
                            'locale' :'en' ,
                            'firstName' : this.card_holder_firstName , 
                            'lastName': this.card_holder_lastName,
                            'email' : this.card_holder_email,
                            'mobile': this.card_holder_contact_one , 
                            'phone':this.card_holder_contact_two, 
                            'sessionId':localStorage.getItem('customerSessionId'), 
                            'company':this.card_holder_company, 
                            'os':'Web',
                            'position':this.card_holder_position,
                            'osVersion':this.osversion,
                            'appVersion':'1.0',
                            'customerId':localStorage.getItem("customerId"),
                            // ==================
                            'cardPic':this.image_name,
                            'cardPicExt':this.image_ext,
                            // ==================
                            'remarks':this.remarks,
                            'jsonResponse':this.json_response, 
                            'cardId': this.card_holder_id,
                            'caller' :this.caller
                            }
                            
          console.log(add_card) ; 

          this.globalservice.add_bisnes_card(add_card).subscribe((resp) => {
          loadingPop.dismiss();
          console.log(resp);
          // this.navCtrl.push(HomePage);
          if (resp.responseStatus.STATUS=="SUCCESS")
          {
            
            this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);   
            
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            
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

  //import { MyAccountPage } from '../my-account/my-account';
  // BACK TO DASHBOARD
got_to_home()
{
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}
}
