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
  public projedct_name: string
  added_project_in_tilkee_id: any;
  mydate: any;
  selectedFile: any;
  minDate: string = moment().add(1, 'day').format('YYYY-MM-DD');

  constructor(public globalservice: GlobalValueProvider, public helperservice: HelperService, public navCtrl: NavController, public navParams: NavParams) {
    this.customerFirstName = this.navParams.get('customerfirstname') + " " + this.navParams.get('customerlastname');
    this.customeremail = this.navParams.get('customeremail')
    this.tilk_proj_id = this.navParams.get('tilkee_project_id')
    this.cardid = this.navParams.get('cardid')
    this.projedct_name = this.customerFirstName + '-' + this.customeremail;
   // console.log("prject name :- " + this.projedct_name + "card id :-" + this.cardid + "existing tilkee id :-" + this.tilk_proj_id);
    //<name of customer>-<name of email>
  }

  ionViewWillEnter() 
  {
    // var today = new Date().toISOString().split('T')[0];
    // console.log('cx');
    // document.getElementById("#txtDate")[0].setAttribute('min', today);
  }
  ionViewDidLoad()
   {


   }

   // AFTER SUBMIT PROJECT CREATE FORM IN TILKEE ITS GOES TO PROJECT PREVIEW PAGE WHICH IS
   // GENERATED TILKEE SERVER .


  gototrackpreview()
   {
      var extensionarray = ["doc", "docx", "pdf", "jpeg", "jpg", "png", "bmp"];
      //var isexist = extensionarray.indexOf("pdf");
      // console.log(isexist)

     // var q = new Date();
      // var m = q.getMonth();
      // var d = q.getDay();
      // var y = q.getFullYear();
      if (this.expirationdate != undefined)
       {
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
      if (CharArray.length > 1) 
      {
        //console.warn("User name NOT VALID");
        // return false;
      }
      else 
      {
       // console.log("User name  VALID");
      }

    if (this.customerFirstName == '')
     {
      this.helperservice.sendalertmessage('bottom', 'Please enter your  name');
     }
    else if (this.customeremail == undefined || this.customeremail == null || this.customeremail == '')
     {
      this.helperservice.sendalertmessage('bottom', 'Please enter your email');
     }
    else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(this.customeremail))
     {
      this.helperservice.sendalertmessage('bottom', 'Please enter proper email ');
     }
    else if (this.titel == '') 
    {
      this.helperservice.sendalertmessage('bottom', 'Please enter file title');
    }
    // else if(CharArray.length > 1)
    // {
    //   this.helperservice.sendalertmessage('bottom', 'No space allow for file title');
    // }
    else if (this.file_check == '') 
    {
      //console.log(this.file_check);
      var res = this.file_check.split(".");
      this.file_ext = res[1];
      this.helperservice.sendalertmessage('bottom', 'Please add  project file ');
    }
    else if (this.expirationdate != undefined && date > this.mydate) 
    {
      this.helperservice.sendalertmessage('bottom', 'Please enter expiration date grater then today ');
    }
    else if (extensionarray.indexOf(this.file_ext) == -1)
     {
      this.helperservice.sendalertmessage('bottom', 'File not supported [Note : Allowed Extension:doc,docx, pdf, txt ,jpeg ,jpg,png,bmp] ');
    }
    else {
            let loadingPop = this.helperservice.createLoadingBar();
            loadingPop.present();
            if (this.tilk_proj_id == "")
             {
                //console.log("if part excuted");
                 if (this.expirationdate != undefined) 
                     {
                        let duratio = this.getDiferenceInDays(this.expirationdate)
                        // console.log(duratio)
              
                        this.project = {
                                          'name': this.projedct_name,
                                          'archived_at': '',
                                          'can_be_downloaded': '',
                                          'duration': duratio,
                                          'external_id': ''
                                        }
              }
            else {
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
          if (resp.id != "") {
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
            console.log(add_tilkee_response)
            this.globalservice.add_tilkee_Project_Details_localserver(add_tilkee_response).subscribe((resp) => { console.log(resp) })
            this.globalservice.tilkeedirectupload(this.file_ext, this.titel).subscribe(
              (resp) => {
                this.globalservice.uploaddata_intoamazonserver(this.selectedFile, resp).subscribe(
                  (resp) => {
                    console.log(resp)
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(resp, "text/xml");
                    let url = doc.getElementsByTagName("Location")[0].childNodes[0].nodeValue;
                    console.log("location" + url)
                    let externalid = Math.floor((Math.random() * 9999) + 1000);
                    let addcontentlink = [{
                      "file_size": null,
                      "name": this.titel,// original file name
                      "from_url": true,
                      "s3_url": url,
                      "url": url,
                      "type": "file",
                      "external_id": ""
                    }]
                    console.log(addcontentlink)
                    this.globalservice.addfile(addcontentlink).subscribe(
                      (resp) => {
                        console.log(resp);
                        //this.navCtrl.push('tilkee_api_integration');
                        if (resp.id != "") {
                          let addfiledata = {
                            "file_id": resp[0].id,
                            "title": this.titel,
                            "project_id": this.added_project_in_tilkee_id
                          }
                          this.globalservice.addfiletoproject(addfiledata).subscribe((response) => {
                            console.log(response);
                            if (response[0].id != "") {
                              loadingPop.dismiss();

                              this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                              console.log('ccxcx');
                              this.navCtrl.push(TrackfilepreviewPage, { 'tilkee_project_id': this.added_project_in_tilkee_id, 'customername': this.customerFirstName, 'customeremail': this.customeremail, 'cardId': this.cardid });

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
                        else {
                          this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                          //this.navCtrl.push('list_projects');
                          loadingPop.dismiss();
                        }
                      },
                      (err) => {
                        this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                      });

                  }, (err) => {
                    loadingPop.dismiss();
                    this.helperservice.sendalertmessage('bottom', 'Failure ,File  not uploaded in amazon server');
                  })

              },
              (err) => {
                loadingPop.dismiss();
                this.helperservice.sendalertmessage('bottom', 'Failure ,File space and signature not created amazon server');
              }
            )
          }
          else {
            loadingPop.dismiss();
            this.helperservice.sendalertmessage('bottom', 'Failure ,Project Not Created');
          }
        }, (err) => {
          loadingPop.dismiss();
          this.helperservice.sendalertmessage('bottom', 'project Not Created');
        });
      }
      else {
        console.log("else part excuted");
        this.added_project_in_tilkee_id = this.tilk_proj_id;
        // signature key and policy genaration for amazon s3 server

        this.globalservice.tilkeedirectupload(this.file_ext, this.titel).subscribe((resp) => {
          console.log(resp)
          // upload data into amazon server
          this.globalservice.uploaddata_intoamazonserver(this.selectedFile, resp).subscribe(
            (resp) => {
              console.log(resp)
              var parser = new DOMParser();
              var doc = parser.parseFromString(resp, "text/xml");
              let url = doc.getElementsByTagName("Location")[0].childNodes[0].nodeValue;
              console.log("location" + url)

              // // add file to tilkee
              let externalid = Math.floor((Math.random() * 9999) + 1000);
              let addcontentlink = [{
                "file_size": null,
                "name": this.file_check,// original file name
                "from_url": true,
                "s3_url": url,
                "url": url,
                "type": "file",

              }]
              console.log(addcontentlink)
              this.globalservice.addfile(addcontentlink).subscribe(
                (resp) => {
                  console.log(resp);
                  //this.navCtrl.push('tilkee_api_integration');
                  if (resp.id != "") {
                    let addfiledata = {
                      "file_id": resp[0].id,
                      "title": this.titel,
                      "project_id": this.added_project_in_tilkee_id
                    }
                    this.globalservice.addfiletoproject(addfiledata).subscribe((response) => {
                      console.log(response);
                      if (response[0].id != "") {
                        loadingPop.dismiss();

                        this.helperservice.sendalertmessage('bottom', 'File added sucessfully with this project  ');
                        console.log('ccxcx');
                        this.navCtrl.push(TrackfilepreviewPage, { 'tilkee_project_id': this.added_project_in_tilkee_id, 'customername': this.customerFirstName, 'customeremail': this.customeremail, 'cardId': this.cardid });

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
                  else {
                    this.helperservice.sendalertmessage('bottom', 'File not uploaded from link');
                    //this.navCtrl.push('list_projects');
                    loadingPop.dismiss();
                  }
                },
                (err) => {
                  this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
                });
            },
            (err) => {

            }
          )
        }, (err) => { console.log(err) })

      }


    }
    // else if(this.file_ext!= "jpg" && this.file_ext!= "png" && this.file_ext!='pdf'  && this.file_ext!='docx' && this.file_ext!='doc' && this.file_ext!='txt' && this.file_ext!='docx' )


    //  this.navCtrl.push(TrackfilepreviewPage);
  }
// ITS USED TO CONVERT FILE TO BASE 64 ENCODED FORMAT
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
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

  // GO TO DASHBOARD PAGE
  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }
// CREATE DATE DIFFERENCE BETWEEN DATE
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
