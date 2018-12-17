import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrackfilepreviewPage } from '../trackfilepreview/trackfilepreview';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { MyAccountPage } from '../my-account/my-account';
import * as moment from 'moment'
import {
  Ng2FileSizeDirective,
  RangeFileSizeRestrictions
} from 'ng2-file-size';


/**
 * Generated class for the AddtrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addtrack',
  templateUrl: 'addtrack.html',
})
export class AddtrackPage {
  public customerFirstName = '';
  public customeremail;
  public titel = '';
  public file_check = '';
  public file_ext = '';
  public tilk_proj_id: any = '';
  public expirationdate: any;
  month: number
  day: number;
  public project: any;
  public cardid: any;
  image_base64_raw: any;
  public projedct_name :string
  added_project_in_tilkee_id: any;
  mydate: any; 
  minDate: string = moment().add(1, 'day').format('YYYY-MM-DD');
  constructor(public globalservice: GlobalValueProvider, public helperservice: HelperService, public navCtrl: NavController, public navParams: NavParams) {
    this.customerFirstName = this.navParams.get('customerfirstname') + " " + this.navParams.get('customerlastname');
    this.customeremail = this.navParams.get('customeremail')
    this.tilk_proj_id = this.navParams.get('tilkee_project_id')
    this.cardid = this.navParams.get('cardid')
    this.projedct_name = this.customerFirstName+'-'+this.customeremail;
    console.log(this.projedct_name);
    //<name of customer>-<name of email>
  }

  ionViewWillEnter() {
    // var today = new Date().toISOString().split('T')[0];
    // console.log('cx');
    // document.getElementById("#txtDate")[0].setAttribute('min', today);
  }
  ionViewDidLoad() {


  }
  gototrackpreview() {

    var q = new Date();
    var m = q.getMonth();
    var d = q.getDay();
    var y = q.getFullYear();
    if (this.expirationdate != undefined) {
      this.mydate = new Date(this.expirationdate);
      console.log(this.mydate)
    }
    var date = new Date();
   
    var res = this.file_check.split(".");
    this.file_ext = res[1];
    console.log(this.file_ext);
    let titelvalue = this.titel.trim();
    console.log(titelvalue);
        var CharArray = titelvalue.split(" ");
        if (CharArray.length > 1) {
            console.warn("User name NOT VALID");
           // return false;
        }
        else {
          console.log("User name  VALID");
        }


    if (this.customerFirstName == '') {
      this.helperservice.sendalertmessage('bottom', 'Please enter your  name');
    }

    else if (this.customeremail == undefined || this.customeremail == null || this.customeremail == '') {
      this.helperservice.sendalertmessage('bottom', 'Please enter your email');
    }
    else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.customeremail)) {
      this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
    }
    else if (this.titel == '') {
      this.helperservice.sendalertmessage('bottom', 'Please enter file title');
    }
    else if(CharArray.length > 1)
    {
      this.helperservice.sendalertmessage('bottom', 'No space allow for file title');
    }
    else if (this.file_check == '') {
      console.log(this.file_check);
      var res = this.file_check.split(".");
      this.file_ext = res[1];
      this.helperservice.sendalertmessage('bottom', 'Please add  project file ');
    }
    else if (this.expirationdate != undefined && date > this.mydate) {
      this.helperservice.sendalertmessage('bottom', 'Please enter expiration date grater then today ');
    }
    else if (this.file_ext=='pdf')
    {
      this.helperservice.sendalertmessage('bottom', 'Pdf file upload not allowed ');
    }
    // else if(this.file_ext!= "jpg" && this.file_ext!= "png" && this.file_ext!='pdf'  && this.file_ext!='docx' && this.file_ext!='doc' && this.file_ext!='txt' && this.file_ext!='docx' )
    else {
      let loadingPop = this.helperservice.createLoadingBar();
      loadingPop.present();
              if(this.tilk_proj_id=="")
              {
                if (this.expirationdate != undefined) {
                  let duratio = this.getDiferenceInDays(this.expirationdate)
                  console.log(duratio)
                  this.project =
                    {
                      'name': this.projedct_name,
                      'archived_at': '',
                      'can_be_downloaded': '',
                      'duration': duratio,
                      'external_id': ''
                    }
                }
                else
                 {
                  this.expirationdate = '';
                  this.project = {
                    'name': this.projedct_name,
                    'archived_at': '',
                    'can_be_downloaded': '',
                    'duration': '',
                    'external_id': ''
                  }
                }
                 
               
                this.globalservice.addproject(this.project).subscribe((resp) => {
                  //loadingPop.dismiss();
                  //this.navCtrl.push('tilkee_api_integration');
                          if (resp.id != "")
                          {
                                let add_tilkee_response =
                                {
                                  'sessionId': localStorage.getItem('customerSessionId'),
                                  'osVersion': localStorage.getItem('osVersion'),
                                  'appVersion': '1.0',
                                  'customerId': localStorage.getItem('customerId'),
                                  'os': 'Web',
                                  'cardId': this.cardid,
                                  'locale': 'eng',
                                  'contactName': this.customerFirstName,
                                  'contactEmail': this.customeremail,
                                  'expiryDate': this.expirationdate,
                                  'tilkeeFile': this.image_base64_raw,
                                  'tilkeeFileExt': this.file_ext,
                                  'title': this.titel,
                                  'projectId': resp.id
                                }
                                this.added_project_in_tilkee_id = resp.id;
                                console.log(add_tilkee_response)
                                      this.globalservice.add_tilkee_Project_Details_localserver(add_tilkee_response).subscribe
                                      (
                                                (resp_data) => {
                                                                  console.log(resp_data)
                                                                  if (resp_data.responseStatus.STATUS == "SUCCESS") 
                                                                  {
                                                                    //tilkeeFileUrl: ""
                                                                    // add file to tilkee
                                                                        resp_data.responseData.tilkeeFileUrl
                                                                        let externalid = Math.floor((Math.random() * 9999) + 1000);
                                                                        let addcontentlink = [{
                                                                        //   "title": this.titel,
                                                                        //   "type": "link",
                                                                        //   "url": resp_data.responseData.tilkeeFileUrl,
                                                                        //   "external_id": externalid.toString()
                                                                        "name":  this.titel,
                                                                        "from_url": true,
                                                                        "s3_url": resp_data.responseData.tilkeeFileUrl,
                                                                        "type": "file",
                                                                        "external_id": externalid.toString()
                                                                        }]
                                                                        console.log(addcontentlink)
                                                                          this.globalservice.addfile(addcontentlink).subscribe((resp) => 
                                                                          {
                                                                              console.log(resp);
                                                                              //this.navCtrl.push('tilkee_api_integration');
                                                                                if (resp.id != "") 
                                                                                {
                                                                                  let addfiledata = {
                                                                                                      "file_id": resp[0].id,
                                                                                                      "project_id": this.added_project_in_tilkee_id
                                                                                                    }
                                                                                                  this.globalservice.addfiletoproject(addfiledata).subscribe((response) => {
                                                                                                    console.log(response);
                                                                                                    if (response[0].id != "") 
                                                                                                    {
                                                                                                      loadingPop.dismiss();
  
                                                                                                      this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                                                                                                      console.log('ccxcx');
                                                                                                       this.navCtrl.push(TrackfilepreviewPage,{'tilkee_project_id':this.added_project_in_tilkee_id,'customername':this.customerFirstName,'customeremail':this.customeremail,'cardId': this.cardid});
  
                                                                                                    }
                                                                                                  },
                                                                                                    (err) => {
                                                                                                      loadingPop.dismiss();
                                                                                                      this.helperservice.sendalertmessage('bottom', err);
                                                                                                    });
  
                                                                                    //this.helperservice.sendalertmessage('bottom', 'File Uploaded Sucessfully');
                                                                                    //this.navCtrl.push('tilkee_api_integration');  
                                                                                    // this.navCtrl.push('list_projects');
                                                                                }
                                                                                else 
                                                                                {
                                                                                  this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                                                                                  //this.navCtrl.push('list_projects');
                                                                                  loadingPop.dismiss();
                                                                                }
                                                                        }, (err) => {
                                                                          this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                                                                        });
  
                                                                  }
                                                                  else if(resp_data.responseStatus.STATUS == "FAILED")
                                                                  {
                                                                    this.helperservice.sendalertmessage('bottom', resp_data.responseStatus.MESSAGE);
                                                                    //this.navCtrl.push('list_projects');
                                                                    loadingPop.dismiss();
                                                                  }
                                                              },
                                                               (err) => { loadingPop.dismiss();
                                                                this.helperservice.sendalertmessage('bottom', err);
                                                              }
                                      )
  
                                //this.helperservice.sendalertmessage('bottom', 'Project Created Sucessfully');
                                //this.navCtrl.push('tilkee_api_integration');
                          }
                          else
                          {  loadingPop.dismiss();
                              this.helperservice.sendalertmessage('bottom', 'Failure ,Project Not Created');
                          }
                }, (err) => {
                  loadingPop.dismiss();
                  this.helperservice.sendalertmessage('bottom', 'project Not Created');
                });
              }
              else
              {
                console.log("else part excuted");
                let add_tilkee_response =
                                {
                                  'sessionId': localStorage.getItem('customerSessionId'),
                                  'osVersion': localStorage.getItem('osVersion'),
                                  'appVersion': '1.0',
                                  'customerId': localStorage.getItem('customerId'),
                                  'os': 'Web',
                                  'cardId': this.cardid,
                                  'locale': 'eng',
                                  'contactName': this.customerFirstName,
                                  'contactEmail': this.customeremail,
                                  'expiryDate': this.expirationdate,
                                  'tilkeeFile': this.image_base64_raw,
                                  'tilkeeFileExt': this.file_ext,
                                  'title': this.titel,
                                  'projectId': this.tilk_proj_id
                                }
                                this.added_project_in_tilkee_id = this.tilk_proj_id;
                                console.log(add_tilkee_response)
                                      this.globalservice.add_tilkee_Project_Details_localserver(add_tilkee_response).subscribe
                                      (
                                                (resp_data) => {
                                                                  console.log(resp_data)
                                                                  if (resp_data.responseStatus.STATUS == "SUCCESS") 
                                                                  {
                                                                    //tilkeeFileUrl: ""
                                                                    // add file to tilkee
                                                                        resp_data.responseData.tilkeeFileUrl
                                                                        let externalid = Math.floor((Math.random() * 9999) + 1000);
                                                                        let addcontentlink = [{
                                                                          "title": this.titel,
                                                                          "type": "link",
                                                                          "url": resp_data.responseData.tilkeeFileUrl,
                                                                          "external_id": externalid.toString()
                                                                        }]
                                                                        console.log(addcontentlink)
                                                                          this.globalservice.addfile(addcontentlink).subscribe((resp) => 
                                                                          {
                                                                              console.log(resp);
                                                                              //this.navCtrl.push('tilkee_api_integration');
                                                                                if (resp.id != "") 
                                                                                {
                                                                                  let addfiledata = {
                                                                                                      "file_id": resp[0].id,
                                                                                                      "project_id": this.added_project_in_tilkee_id
                                                                                                    }
                                                                                                  this.globalservice.addfiletoproject(addfiledata).subscribe((response) => {
                                                                                                    console.log(response);
                                                                                                    if (response[0].id != "") 
                                                                                                    {
                                                                                                      loadingPop.dismiss();
  
                                                                                                      this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                                                                                                      console.log('ccxcx');
                                                                                                       this.navCtrl.push(TrackfilepreviewPage,{'tilkee_project_id':this.added_project_in_tilkee_id,'customername':this.customerFirstName,'customeremail':this.customeremail,'cardId': this.cardid});
  
                                                                                                    }
                                                                                                  },
                                                                                                    (err) => {
                                                                                                      loadingPop.dismiss();
                                                                                                      this.helperservice.sendalertmessage('bottom', err);
                                                                                                    });
  
                                                                                    //this.helperservice.sendalertmessage('bottom', 'File Uploaded Sucessfully');
                                                                                    //this.navCtrl.push('tilkee_api_integration');  
                                                                                    // this.navCtrl.push('list_projects');
                                                                                }
                                                                                else 
                                                                                {
                                                                                  this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                                                                                  //this.navCtrl.push('list_projects');
                                                                                  loadingPop.dismiss();
                                                                                }
                                                                        }, (err) => {
                                                                          this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                                                                        });
  
                                                                  }
                                                                  else if(resp_data.responseStatus.STATUS == "FAILED")
                                                                  {
                                                                    this.helperservice.sendalertmessage('bottom', resp_data.responseStatus.MESSAGE);
                                                                    //this.navCtrl.push('list_projects');
                                                                    loadingPop.dismiss();
                                                                  }
                                                              },
                                                               (err) => { loadingPop.dismiss();
                                                                this.helperservice.sendalertmessage('bottom', err);
                                                              }
                                      )
              }
              
         }

    //  this.navCtrl.push(TrackfilepreviewPage);
  }

  onFileChanged(event) {
    console.log(event);
    console.log(event.target.files[0].name);
    this.file_check = event.target.files[0].name;

    var res_img = this.file_check.split(".");

    this.file_ext = res_img[1];
    /// convert it into base 64
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  //import { MyAccountPage } from '../my-account/my-account';
  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }

  getDiferenceInDays(theDate) {
    //our custom function with two parameters, each for a selected date
    console.log(Date.parse(theDate));

    console.log(typeof theDate);
    let diffc = Date.parse(theDate) - new Date().getTime();
    //getTime() function used to convert a date into milliseconds. This is needed in order to perform calculations.

    let days = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
    //this is the actual equation that calculates the number of days.

    return days;
    //return Math.abs(theDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) ;
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.image_base64_raw = btoa(binaryString);
    //this. img_ext_raw = "png" ;
    //this.base64textString= 'data:image/png;base64,' + btoa(binaryString);
    // console.log(btoa(binaryString));
  }
}
