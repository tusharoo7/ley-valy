import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
/**
 * Generated class for the FileUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-upload',
  templateUrl: 'file-upload.html',
})
export class FileUploadPage {
public entrytext :any;
public external_url :string ;
public texttitel :string ;
public urltitel :any ;
public projectid :any ;
  constructor( public globalservice: GlobalValueProvider,public helperservice : HelperService ,public viewCtrl: ViewController ,public navCtrl: NavController, public navParams: NavParams) {

    console.log('projectid', navParams.get('projectid'));
    this.projectid = navParams.get('projectid') ;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FileUploadPage');
  }

  addcontent()
  {
    if(this.entrytext =='' || this.entrytext ==null ||  this.entrytext==undefined)
    {
      this.helperservice.sendalertmessage('bottom','Please Enter Some Text Content');
    }
    else
    {
      if(this.texttitel =="" )
      {
        this.texttitel = "No Sub Titel" ;
      }
      else
      {
        this.texttitel =  this.texttitel ;
      }
      let externalid = Math.floor((Math.random() * 9999) + 1000);
      let addcontenttext  = [{
                                "content": this.entrytext,
                                "title": this.texttitel ,
                                "type": "text",
                                "external_id": externalid.toString()
                            }]

       let loadingPop = this.helperservice.createLoadingBar();
       loadingPop.present();
       this.globalservice.addfile(addcontenttext).subscribe((resp) => {
       
       // console.log(resp);
       // console.log(resp[0].id);
       //this.navCtrl.push('tilkee_api_integration');
       if (resp.id!="")
          {
            //console.log(resp[0].id);
            let addfiledata = {
                                "file_id" : resp[0].id,
                                "project_id" : this.projectid
                               }

            this.globalservice.addfiletoproject(addfiledata).subscribe((response) =>
             {
                // console.log(response);
                 if (response[0].id!="")
                   {
                    loadingPop.dismiss();
                    this.helperservice.sendalertmessage('bottom','File added sucessfully with this project ');
                    this.navCtrl.push('list_projects');
                   }
                 
               }, (err) => 
                         {
                            this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                           });   
 
           }
           else
            {
              loadingPop.dismiss();
               this.helperservice.sendalertmessage('bottom','Failure ,File Not Uploaded');
               this.navCtrl.push('list_projects');
             }
         }, (err) => 
            {
              this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
              this.navCtrl.push('list_projects');
             });               
          
    }
  }
  addcontentfromurl()
  {

    if(this.external_url =='' || this.external_url ==null ||  this.external_url==undefined)
    {
      this.helperservice.sendalertmessage('bottom','Please Enter Correct Content Url');
    }
    // else if(  !new RegExp("[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi").test(this.external_url)) 
    // {
    //   this.helperservice.sendalertmessage('bottom','please enter proper url ');
    // }
    else
    {
      if(this.urltitel =="" )
      {
        this.urltitel = "No Sub Titel" ;
      }
      else
      {
        this.urltitel =  this.urltitel ;
      }
      let externalid = Math.floor((Math.random() * 9999) + 1000);
      let addcontentlink  =  [{
                              "title": this.urltitel ,
                              "type":  "link",
                              "url": this.external_url,
                              "external_id": externalid.toString()
                              }]
      // console.log(addcontentlink)  ;   
      
      let loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.addfile(addcontentlink).subscribe((resp) => {
                loadingPop.dismiss();
                console.log(resp);
               //this.navCtrl.push('tilkee_api_integration');
                 if (resp.id!="")
                 {
                    let addfiledata = {
                                        "file_id" : resp[0].id,
                                        "project_id" : this.projectid
                                      }
                                      this.globalservice.addfiletoproject(addfiledata).subscribe((response) =>
                                      {
                                         // console.log(response);
                                          if (response[0].id!="")
                                            {
                                             loadingPop.dismiss();
                                             this.helperservice.sendalertmessage('bottom','File added sucessfully with this project ');
                                             this.navCtrl.push('list_projects');
                                            }
                                          
                                        }, (err) => 
                                                  {
                                                     this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                                                    });   
                          
                   this.helperservice.sendalertmessage('bottom','File Uploaded Sucessfully');
                   //this.navCtrl.push('tilkee_api_integration');  
                   this.navCtrl.push('list_projects'); 
                 }
                 else
                  {
                   this.helperservice.sendalertmessage('bottom','Failure ,File Not Uploaded');
                   this.navCtrl.push('list_projects');
                 }
         }, (err) => 
         {
          this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
        });   
    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
