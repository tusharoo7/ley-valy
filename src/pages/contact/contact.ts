import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';
import { BussinesscardPage } from '../bussinesscard/bussinesscard';
import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'search_contact' })
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  public user = {
    'first_name': '',
    'last_name': '',
    'domain': ''
  }
  public osversion: any;
  public hunter = {
    'first_name': '',
    'last_name': '',
    'linkedin_url': '',
    'email': '',
    'status': '',
    'domain': ''
  };
  public lusha = {
    'first_name': '',
    'last_name': '',
    'linkedin_url': '',
    'email': '',
    'status': '',
    'domain': ''
  };

  hunterJsonResponse: any;
  lushaJsonResponse: any;
  constructor(public helperservice: HelperService, public globalservice: GlobalValueProvider, public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.lusha.status)
    console.log(this.hunter.status)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    var objAgent = navigator.userAgent;
    var objbrowserName = navigator.appName;
    var objfullVersion = '' + parseFloat(navigator.appVersion);
    var objBrMajorVersion = parseInt(navigator.appVersion, 10);
    var objOffsetName, objOffsetVersion, ix;
    // In Chrome 
    if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
      objbrowserName = "Chrome";
      objfullVersion = objAgent.substring(objOffsetVersion + 7);
    }
    // In Microsoft internet explorer
    else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
      objbrowserName = "Microsoft Internet Explorer";
      objfullVersion = objAgent.substring(objOffsetVersion + 5);
    }
    // In Firefox
    else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
      objbrowserName = "Firefox";
    }
    // In Safari 
    else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
      objbrowserName = "Safari";
      objfullVersion = objAgent.substring(objOffsetVersion + 7);
      if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
        objfullVersion = objAgent.substring(objOffsetVersion + 8);
    }
    // For other browser "name/version" is at the end of userAgent 
    else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) <
      (objOffsetVersion = objAgent.lastIndexOf('/'))) {
      objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
      objfullVersion = objAgent.substring(objOffsetVersion + 1);
      if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
        objbrowserName = navigator.appName;
      }
    }
    // trimming the fullVersion string at semicolon/space if present
    if ((ix = objfullVersion.indexOf(";")) != -1)
      objfullVersion = objfullVersion.substring(0, ix);
    if ((ix = objfullVersion.indexOf(" ")) != -1)
      objfullVersion = objfullVersion.substring(0, ix);

    objBrMajorVersion = parseInt('' + objfullVersion, 10);
    if (isNaN(objBrMajorVersion)) {
      objfullVersion = '' + parseFloat(navigator.appVersion);
      objBrMajorVersion = parseInt(navigator.appVersion, 10);
    }

    this.osversion = objbrowserName + "_" + objfullVersion;
  }
// SEARCH CONTACT DETAILS 
  search_contact() {
    if (this.user.first_name == '') {
      this.helperservice.sendalertmessage('bottom', 'Please enter your first name');
    }
    else if (this.user.last_name == '') {
      this.helperservice.sendalertmessage('bottom', 'Please enter your last name');
    }
    // else if(this.user.enterprice=='')
    // {
    //   this.helperservice.sendalertmessage('bottom','Please Enter Your Enterprice Name');
    // }
    else if (this.user.domain == undefined || this.user.domain == null || this.user.domain == '') {
      this.helperservice.sendalertmessage('bottom', 'Please provide domain name');
    }
    else {
      let loadingPop = this.helperservice.createLoadingBar();
      loadingPop.present();

      let searchoption = {
        'locale': 'eng',
        'deviceId': localStorage.getItem('deviceId'),
        'os': 'Web',
        'osVersion': localStorage.getItem('osVersion'),
        'appVersion': '1.0',
        'customerId': localStorage.getItem('customerId'),
        'sessionId': localStorage.getItem('customerSessionId'),
        'firstName': this.user.first_name,
        'lastName': this.user.last_name,
        'domainName': this.user.domain
      }

      console.log(searchoption);
      this.globalservice.calllushaandhunter(searchoption).subscribe((resp) => {
        loadingPop.dismiss();
        if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {

          // this.helperservice.sendalertmessage('bottom',resp.responseStatus.MESSAGE);
          console.log('hunterJsonResponse')
          console.log();
          this.hunterJsonResponse = JSON.parse(resp.responseData.jsonResponse.hunterJsonResponse)
          if (this.hunterJsonResponse.data.first_name != null && this.hunterJsonResponse.data.first_name != undefined && this.hunterJsonResponse.data.last_name != null && this.hunterJsonResponse.data.last_name != undefined && this.hunterJsonResponse.data.email != null && this.hunterJsonResponse.data.email != undefined) {
            //'phone_number' :resp.data.phone_number.split('').join(' '),
            this.hunter = {
              'first_name': this.hunterJsonResponse.data.first_name,
              'last_name': this.hunterJsonResponse.data.last_name,
              'linkedin_url': this.hunterJsonResponse.data.linkedin_url,

              'email': this.hunterJsonResponse.data.email,
              'domain': this.hunterJsonResponse.data.domain,
              'status': 'sucess'
            }
            if (this.hunterJsonResponse.data.company != null) {
              this.hunter['company'] = this.hunterJsonResponse.data.company;
            }
            else {
              this.hunter['company'] = '-';
            }

            if (this.hunterJsonResponse.data.position != null) {
              this.hunter['position'] = this.hunterJsonResponse.data.position;
            }
            else {
              this.hunter['position'] = '-';
            }

            if (this.hunterJsonResponse.data.phone_number != null && this.hunterJsonResponse.data.phone_number != "") {
              //console.log('fff')
              this.hunter['phone_number'] = '+' + this.hunterJsonResponse.data.phone_number;
            }
            else {
              //console.log('sddsdsfff')
              this.hunter['phone_number'] = '-';
            }
          }
          else {
            this.hunter = {
              'first_name': '',
              'last_name': '',
              'linkedin_url': '',
              'email': '',
              'domain': '',
              'status': 'failure'
            }
            this.hunter['phone_number'] = '-';
            this.hunter['company'] = '-';
            this.hunter['position'] = '-';
          }

          console.log('lushaJsonResponse')
          if (resp.responseData.jsonResponse.lushaJsonResponse != "") {
            console.log(resp.responseData.jsonResponse.lushaJsonResponse);
            this.lushaJsonResponse = JSON.parse(resp.responseData.jsonResponse.lushaJsonResponse)
            if (this.lushaJsonResponse.data.firstName != null && this.lushaJsonResponse.data.firstName != undefined && this.lushaJsonResponse.data.lastName != null && this.lushaJsonResponse.data.lastName != undefined && this.lushaJsonResponse.data.emailAddresses[0].email != null  && this.lushaJsonResponse.data.email != undefined) {
              this.lusha = {
                'first_name': this.lushaJsonResponse.data.firstName,
                'last_name': this.lushaJsonResponse.data.lastName,
                'linkedin_url': '',
                'email': this.lushaJsonResponse.data.emailAddresses[0].email,
                'domain': this.lushaJsonResponse.data.company.domain,
                'status': 'sucess'
              }

              if (this.lushaJsonResponse.data.company.name != null) {
                this.lusha['company'] = this.lushaJsonResponse.data.company.name;
              }
              else {
                this.lusha['company'] = '-';
              }


              this.lusha['position'] = '-';


              if (this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber != null && this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber != "") {
                //console.log('fff')
                // this.lusha['phone_number']=this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber.split('').join(' ');
                this.lusha['phone_number'] = this.lushaJsonResponse.data.phoneNumbers[0].internationalNumber;
              }
              else {
                //console.log('sddsdsfff')
                this.lusha['phone_number'] = '-';
              }

              if (this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber != null && this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber != "") {
                //console.log('fff')
                this.lusha['phone_number_two'] = this.lushaJsonResponse.data.phoneNumbers[1].internationalNumber;
              }
              else {
                //console.log('sddsdsfff')
                this.lusha['phone_number_two'] = '';
              }
            }
            else {
              this.lusha = {
                'first_name': '',
                'last_name': '',
                'linkedin_url': '',
                'email': '',
                'domain': '',
                'status': 'failure'
              }
              this.lusha['phone_number'] = '-';
              this.lusha['company'] = '-';
              this.lusha['position'] = '-';
              this.lusha['phone_number_two'] = '-';
            }
          }

        }
        else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '601') {
          this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
        }
        else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '500') {
          this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
        }
        else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '210') {
          this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
          this.helperservice.backtohome()
        }
        else if (resp.responseStatus.STATUS == 'FAILED' && resp.responseStatus.STATUSCODE == '300') {
          this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
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
      }, (err) => {
        loadingPop.dismiss();
        this.helperservice.sendalertmessage('bottom', err);
      })

    }
  }

// SAVE TO CONTACT INFORMATION
  add_this_data() {
    let add_card = {
      'locale': 'en',
      'firstName': this.hunter.first_name,
      'lastName': this.hunter.last_name,
      'email': this.hunter.email,
      'mobile': '',
      'phone': this.hunter['phone_number'],
      'sessionId': localStorage.getItem('customerSessionId'),
      'company': this.hunter['company'],
      'os': 'Web',
      'position': this.hunter['position'],
      'cardPic': '',
      'cardPicExt': '',
      'osVersion': this.osversion,
      'appVersion': '1.0',
      'customerId': localStorage.getItem("customerId"),
      'jsonResponse': '{}',
      'cardId': '',
      'caller': 'Hunter'
    }

    console.log(add_card);
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();
    this.globalservice.add_bisnes_card(add_card).subscribe((resp) => {
      loadingPop.dismiss();
      console.log(resp);
      // this.navCtrl.push(HomePage);
      if (resp.responseStatus.STATUS == "SUCCESS") {

        this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
        this.navCtrl.push(BussinesscardPage);
      }
      else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
        this.helperservice.backtohome();
      }
      else {
        this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
      }
    }, (err) => {
        this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
      });
  }
// ADD LUSHA DETAILS
  add_lusha_data() {
    let add_card = {
      'locale': 'en',
      'firstName': this.lusha.first_name,
      'lastName': this.lusha.last_name,
      'email': this.lusha.email,
      'mobile': '',
      'phone': this.lusha['phone_number'],
      'sessionId': localStorage.getItem('customerSessionId'),
      'company': this.lusha['company'],
      'os': 'Web',
      'position': this.lusha['position'],
      'cardPic': '',
      'cardPicExt': '',
      'osVersion': this.osversion,
      'appVersion': '1.0',
      'customerId': localStorage.getItem("customerId"),
      'jsonResponse': '{}',
      'cardId': '',
      'caller': 'Lusha'
    }

    console.log(add_card);
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();
    this.globalservice.add_bisnes_card(add_card).subscribe((resp) => {
      loadingPop.dismiss();
      console.log(resp);
      // this.navCtrl.push(HomePage);
      if (resp.responseStatus.STATUS == "SUCCESS") {

        this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
        this.navCtrl.push(BussinesscardPage);
      }
      else if (resp.responseStatus.STATUS == "FAILED" && resp.responseStatus.STATUSCODE == "210") {
        this.helperservice.backtohome();
      }
      else {
        this.helperservice.sendalertmessage('bottom', resp.responseStatus.MESSAGE);
      }
    }, (err) => {
        this.helperservice.sendalertmessage('bottom', "oops..! internal error occurred!");
      });
  }
  // BACK TO DASHBOARD
  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }

  got_to_camcard() {
    this.navCtrl.push('camacard-test')
  }
}
