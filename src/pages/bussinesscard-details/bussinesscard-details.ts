import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';

import { BussinesscardEditPage } from '../bussinesscard-edit/bussinesscard-edit';


import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';
import {AddtrackPage } from '../addtrack/addtrack';
import { MyAccountPage } from '../my-account/my-account';
import {ProjectStatPage} from '../project-stat/project-stat';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
/**
 * Generated class for the BussinesscardDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bussinesscard-details',
  templateUrl: 'bussinesscard-details.html',
})
export class BussinesscardDetailsPage {
 
  cardid :any ;
  osversion :any;
  card_details :any;
  card_image :any ="";
  card_company:any =""; 
  card_email:any ="";
  card_firstName:any ="";
  card_lastName:any ="";
  card_mobile:any 
  card_phone:any
  card_position:any ="";
  projectId_tilkee :any;
  tik_list_stat:any='';
  // 08 february 2019 6.33 pm {start}
  allowTilkee:any=''; 
  tilkeeMsg:any='';
  // 08 february 2019 6.33 pm {end}
  constructor(public modalCtrl: ModalController,@Inject(DOCUMENT) private document: any,public helperservice : HelperService ,public globalservice: GlobalValueProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.cardid = navParams.get('cardid');
    console.log(this.cardid);
  }
// get details of buiness card
  ionViewDidLoad()
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

   

    //sessionId, osVersion, appVersion, customerId, os, cardId, locale
let getcarddetails = {
                  'sessionId':localStorage.getItem('customerSessionId'), 
                  'osVersion':this.osversion, 
                  'appVersion':'1.0', 
                  'customerId':localStorage.getItem("customerId"), 
                  'os':'Web', 
                  'cardId':this.cardid, 
                  'locale':'en'
                }

                let loadingPop = this.helperservice.createLoadingBar();
                loadingPop.present();
                console.log(getcarddetails);
                this.globalservice.get_card_details(getcarddetails).subscribe((resp) => {
                  loadingPop.dismiss();
                  console.log(resp);
                // // this.navCtrl.push(HomePage); 
                   if (resp.responseStatus.STATUS=="SUCCESS" && resp.responseStatus.STATUSCODE== "200")
                    {
                      this.card_details =  resp.responseData
                      this.projectId_tilkee = this.card_details.projectId
                      // 08 february 2019 6.33 pm {start}
                      this.allowTilkee = this.card_details.allowTilkee
                      this.tilkeeMsg = this.card_details.tilkeeMsg
                       // 08 february 2019 6.33 pm {end}
                     if(this.card_details.cardPic
                      !=null && this.card_details.cardPic!=undefined )
                     {
                      this.card_image =this.card_details.cardPic;
                     }
                     else
                     {
                      this.card_image ="assets/imgs/business_card_no_image.png";
                     }
                     
                     if(this.card_details.company!=null && this.card_details.company!=undefined && this.card_details.company!="" )
                     {
                      this.card_company =this.card_details.company;
                     }
                     else
                     {
                      this.card_company ="Company details not given";
                     }
                     
                      
                     if(this.card_details.email!=null || this.card_details.email!=undefined || this.card_details.email!="")
                     {
                      this.card_email =this.card_details.email;
                     }
                     else
                     {
                      this.card_email ="Details Not Availabel";
                     }

                     if(this.card_details.firstName!=null && this.card_details.firstName!=undefined  )
                     {
                      this.card_firstName =this.card_details.firstName;
                     }
                     else
                     {
                      this.card_firstName ="Details Not Availabel";
                     }

                     if(this.card_details.lastName!=null && this.card_details.lastName!=undefined && this.card_details.lastName!="" )
                     {
                      this.card_lastName =this.card_details.lastName;
                     }
                     else
                     {
                      this.card_lastName ="";
                     }

                     if(this.card_details.mobile!='null' && this.card_details.mobile!=undefined && this.card_details.mobile!="" )
                     {
                       console.log('d');
                      this.card_mobile =this.card_details.mobile;
                     }
                     else
                     {
                      this.card_mobile ="-";
                     }

                     if(this.card_details.phone!='null' && this.card_details.phone!=undefined && this.card_details.phone!="" )
                     {
                      console.log('er');
                      this.card_phone =this.card_details.phone;
                     }
                     else
                     {
                      console.log('ersas');
                      this.card_phone ="-";
                     }

                     if(this.card_details.position!=null && this.card_details.position!=undefined && this.card_details.position!='' )
                     {
                      this.card_position =this.card_details.position;
                     }
                     else
                     {
                      this.card_position ="Position not given";
                     }

                    // console.log(this.card_phone);
                    // console.log(this.card_mobile);

                     /// check any statistical data found or not
                     if(this.projectId_tilkee!="")
                     {
                      this.globalservice.listtilkstat(this.projectId_tilkee).subscribe((resp) => {
                        console.log("resp");
                        console.log(resp);
                                   if (resp.contents!="")
                                    {
                                      this.tik_list_stat = resp.contents;
                                      console.log(this.tik_list_stat);
                                    }
                                    else
                                     {
                                      this.tik_list_stat =''
                                     // this.helperservice.sendalertmessage('bottom','No Projects Created');
                                     }
                                 //this.navCtrl.push('tilkee_api_integration');
                                 }, 
                                 (err) => 
                                    {
                                        //this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                                    });   
                                    console.log(this.tik_list_stat)
                     }
                     
                  }
                  else if(resp.responseStatus.STATUS=="FAILED" && resp.responseStatus.STATUSCODE== "210")
                  {
                    this.helperservice.backtohome();
                  }
                  else
                    {
                      this.card_details = ""
                      this.card_image ="assets/imgs/business_card_no_image.png";
                      this.card_company ="Company details not given"; 
                      this.card_email ="Details Not Availabel";
                      this.card_firstName="Details Not Availabel";
                      this.card_lastName="Details Not Availabel";
                      this.card_mobile="";
                      this.card_phone="";
                      this.card_position="Position not given";
                    }
           }, (err) => 
           {
            this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
          });              
    console.log('ionViewDidLoad BussinesscardDetailsPage');
  }

  // gobussinesscardeditpage() {
  //   this.navCtrl.push(BussinesscardEditPage);
  // }
  // go to edit card
  edit_card(cardid)
  {
    //console.log(this.card_details);
    this.navCtrl.push(BussinesscardEditPage,{card_details :this.card_details})
  }
  // delete this card
  delete_this(cardid){
    
    let delete_card  = {
                        'sessionId':localStorage.getItem('customerSessionId'),
                        'osVersion':this.osversion,
                        'appVersion':'1.0', 
                        'customerId':localStorage.getItem("customerId"),
                        'os':'Web', 
                        'cardId':this.cardid, 
                        'locale':'en'
                       }
    
     let alert =  this.helperservice.showConfirmAlert('Delete buisness card','Are you sure you want to permanently delete this buisness card ?') 

     alert.present();
     
     alert.onDidDismiss((data) => {
           console.log('Yes/No', data);
           if(data==true)
           {
            console.log('Yes');
                   let loadingPop = this.helperservice.createLoadingBar();
                       loadingPop.present();
                       
                       this.globalservice.delete_card(delete_card).subscribe((resp) => {loadingPop.dismiss();
                        console.log(resp);
                      // this.navCtrl.push(HomePage);
                         if (resp.responseStatus.STATUS=="SUCCESS")
                         {
                          
                   
                          this.navCtrl.pop();
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
           else
           {
            console.log('No');
           }
     }); 
                
                
              }     
              // go to upload page for crate new project or upload file with existing project
              addtrack() {
                // 08 february 2019 6.33 pm {start}
               if(this.allowTilkee==false) 
               {
                this.helperservice.sendalertmessage('bottom',this.tilkeeMsg)
               }
               if(this.allowTilkee==true) 
               {
                this.navCtrl.push(AddtrackPage ,{'customerfirstname' :this.card_firstName ,'customerlastname':this.card_lastName,'customeremail':this.card_email ,'cardid':this.cardid,'tilkee_project_id':this.projectId_tilkee});
               }
                // 08 february 2019 6.33 pm {end}
              }

              //import { MyAccountPage } from '../my-account/my-account';
  // GO TO DASHBOARD PAGE              
got_to_home()
{
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}
// goToUrl(): void {

//   let profileModal =  this.modalCtrl.create('TilkPreviewPage', { 'preview': '' });

//         profileModal.present();
//  // window.open("https://docs.tilkee.io/preview/OTdlMDM2YWE0OA", "", "width=100, height=100");
// }

// goTonewUrl(): void
// {
//   window.open("https://docs.tilkee.io/preview/OTdlMDM2YWE0OA", "", "width=100, height=100");
// }

// got to statistics page 
// view_stat_details(tilk_id)
// {
    
//   let profileModal = this.modalCtrl.create('TilkStatPage', { 'projectid': this.projectId_tilkee,'id_connexion':tilk_id });
//   profileModal.present();
// }
// got to tilkee  statistics page 
getstat(projectid,projectname)
    {
     //this.navCtrl.push('projectstat',{projectid:projectid,projectname:projectname})
     this.navCtrl.push(ProjectStatPage,{projectid:projectid,projectname:projectname})
    }


}
