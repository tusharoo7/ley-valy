import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,ModalController } from 'ionic-angular';
import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { Navbar } from 'ionic-angular';
import {BussinesscardPage}  from '../bussinesscard/bussinesscard';
/**
 * Generated class for the TrackfilepreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trackfilepreview',
  templateUrl: 'trackfilepreview.html',
})
export class TrackfilepreviewPage {
  @ViewChild(Navbar) navBar: Navbar;
  public tilk_proj_id :any;
  public customerName = '';
  public customeremail;
  sharabel_url :any;
  cardId:any;
 
  public link:any;
  constructor(public modalCtrl: ModalController,public globalservice: GlobalValueProvider, public helperservice: HelperService,public navCtrl: NavController, public navParams: NavParams) {
    this.tilk_proj_id = this.navParams.get('tilkee_project_id')
    this.customerName = this.navParams.get('customername');
    this.customeremail = this.navParams.get('customeremail')
    this.cardId =  this.navParams.get('cardId')
  }
  ionViewWillEnter()
  {
    // before create tilk search tilk already craeted or not 
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();
    this.globalservice.tilk_creted_search(this.tilk_proj_id,this.customerName).subscribe(
      (response)=>{
        loadingPop.dismiss();
        if(response.total>0)
        {
          console.log('tilk exist');
          this.link=response.contents;
          this.sharabel_url = this.link[0].link
          console.log(this.link[0].preview_url);
          console.log(this.link[0].preview_url)
        }
        else
        {
          console.log('tilk new create');
          let generatelinkjson ={
                                  "persons":[
                                    {"name":this.customerName}
                                  ]
                                }
          
          this.globalservice.generatelink(generatelinkjson,this.tilk_proj_id).subscribe(
            (response) =>
                   {
                    loadingPop.dismiss();
                    
                    if(response.length != 0) 
                    {
                       console.log(response.contents);
                       this.link=response.contents;
                       this.sharabel_url = this.link[0].link
                       console.log(this.link[0].preview_url);
                   } 
                  else
                   {
                   }
                     }, 
             
            (err) =>  {
                         this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                      });   
        }
      },
      (err)=>{
                this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
              }
    );

    

  }
  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad TrackfilepreviewPage');
  }


  view_preview()
  {
   // let profileModal = this.modalCtrl.create('TilkPreviewPage', { 'preview': this.link[0].preview_url });

     //   profileModal.present();
     window.open(this.link[0].preview_url,'_blank');
  }
  send_link()
  {
    let alert =  this.helperservice.showConfirmAlert('Confirm!','Are you sure you want to send this link ?') 

    alert.present();
    
    alert.onDidDismiss((data) => {
          console.log('Yes/No', data);
          if(data==true)
          {
            let sendurltoclient ={
                                  'sessionId' :localStorage.getItem('customerSessionId'), 
                                  'osVersion':localStorage.getItem('osVersion'),
                                  'appVersion':'1.0',
                                  'customerId':localStorage.getItem("customerId"),
                                  'os': 'Web',
                                  'cardId':this.cardId, 
                                  'locale':'eng', 
                                  'contactName':this.customerName,
                                  'contactEmail':this.customeremail ,
                                  'customerName':this.customeremail , 
                                  'tilkeeFileUrl':this.sharabel_url,
                                  'projectId':this.tilk_proj_id,
                                 }
                console.log(sendurltoclient)                 
               this.globalservice.sendurltocustomer(sendurltoclient).subscribe(
                (resp_data) => {
                  console.log(resp_data)
                  if (resp_data.responseStatus.STATUS == "SUCCESS") 
                  {
                    this.helperservice.sendalertmessage('bottom',resp_data.responseStatus.MESSAGE);
                    const index = this.navCtrl.getActive().index;
                    this.navCtrl.remove(0, index);
                    this.navCtrl.push(BussinesscardPage);
                  }
                },
                 (err) => {
                  this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                }
                )

          }
          else
          {
           console.log('No');
          }
    }); 
  }

  //Method to override the default back button action
setBackButtonAction(){
  this.navBar.backButtonClick = () => {
    console.log("backbutton fire");
  //Write here wherever you wanna do
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.push(BussinesscardPage);
  }
}
}
