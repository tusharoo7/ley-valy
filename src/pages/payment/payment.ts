import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { HelperService } from '../../services/helper/helper.service';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { MyAccountPage } from '../my-account/my-account';
import { PaymentdetailsPage } from '../paymentdetails/paymentdetails';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public free_subscription = {
    'activationDate': '',
    'businessCardScanVal': '',
    'cardScanCredit': '',
    'cardScanCreditBalance': '',
    'currencySymbol': '',
    'description': '',
    'duration': '',
    'durationLevel': '',
    'durationType': '',
    'durationValue': '',
    'expiredDate': '',
    'monthlyCharge': '',
    'periodWithCharge': '',
    'planCahrge': '',
    'requestsVal': '',
    'searchCredit': '',
    'searchCreditBalance': '',
    'status': '',
    'subscriptionId': '',
    'subscriptionName': '',
    'subscriptionType': '',
    'tilkeeCredit': '',
    'tilkeeCreditBalance': '',
    'total': '',
    'trackedDocumentsVal': ''
  }
  public yearly_subscription = {
    'activationDate': '',
    'businessCardScanVal': '',
    'cardScanCredit': '',
    'cardScanCreditBalance': '',
    'currencySymbol': '',
    'description': '',
    'duration': '',
    'durationLevel': '',
    'durationType': '',
    'durationValue': '',
    'expiredDate': '',
    'monthlyCharge': '',
    'periodWithCharge': '',
    'planCahrge': '',
    'requestsVal': '',
    'searchCredit': '',
    'searchCreditBalance': '',
    'status': '',
    'subscriptionId': '',
    'subscriptionName': '',
    'subscriptionType': '',
    'tilkeeCredit': '',
    'tilkeeCreditBalance': '',
    'total': '',
    'trackedDocumentsVal': ''
  }
  public buy_subscription:boolean=false
  public buy_subscription_button_text:any=""
  constructor(public helperservice: HelperService, public globalservice: GlobalValueProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();
    let subscriptondata = {
      'os': 'Web',
      'osVersion': localStorage.getItem('osVersion'),
      'appVersion': '1.0',
      'locale': 'eng',
      'customerId': localStorage.getItem('customerId'),
      'sessionId': localStorage.getItem('customerSessionId')
    }
   //sss console.log(subscriptondata);
    this.globalservice.getsubscriptionslanlist(subscriptondata).subscribe(
      (resp) => {
       // console.log(resp);
        loadingPop.dismiss();
        if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
          this.free_subscription = {
            'activationDate': resp.responseData[1].activationDate,
            'businessCardScanVal': resp.responseData[1].businessCardScanVal,
            'cardScanCredit': resp.responseData[1].cardScanCredit,
            'cardScanCreditBalance': resp.responseData[1].cardScanCreditBalance,
            'currencySymbol': resp.responseData[1].currencySymbol,
            'description': resp.responseData[1].description,
            'duration': resp.responseData[1].duration,
            'durationLevel': resp.responseData[1].durationLevel,
            'durationType': resp.responseData[1].durationType,
            'durationValue': resp.responseData[1].durationValue,
            'expiredDate': resp.responseData[1].expiredDate,
            'monthlyCharge': resp.responseData[1].monthlyCharge,
            'periodWithCharge': resp.responseData[1].periodWithCharge,
            'planCahrge': resp.responseData[1].planCahrge,
            'requestsVal': resp.responseData[1].requestsVal,
            'searchCredit': resp.responseData[1].searchCredit,
            'searchCreditBalance': resp.responseData[1].searchCreditBalance,
            'status': resp.responseData[1].status,
            'subscriptionId': resp.responseData[1].subscriptionId,
            'subscriptionName': resp.responseData[1].subscriptionName,
            'subscriptionType': resp.responseData[1].subscriptionType,
            'tilkeeCredit': resp.responseData[1].tilkeeCredit,
            'tilkeeCreditBalance': resp.responseData[1].tilkeeCreditBalance,
            'total': resp.responseData[1].total,
            'trackedDocumentsVal': resp.responseData[1].trackedDocumentsVal
          }
          this.yearly_subscription = {
            'activationDate': resp.responseData[0].activationDate,
            'businessCardScanVal': resp.responseData[0].businessCardScanVal,
            'cardScanCredit': resp.responseData[0].cardScanCredit,
            'cardScanCreditBalance': resp.responseData[0].cardScanCreditBalance,
            'currencySymbol': resp.responseData[0].currencySymbol,
            'description': resp.responseData[0].description,
            'duration': resp.responseData[0].duration,
            'durationLevel': resp.responseData[0].durationLevel,
            'durationType': resp.responseData[0].durationType,
            'durationValue': resp.responseData[0].durationValue,
            'expiredDate': resp.responseData[0].expiredDate,
            'monthlyCharge': resp.responseData[0].monthlyCharge,
            'periodWithCharge': this.toHTML(resp.responseData[0].periodWithCharge),
            'planCahrge':this.toHTML(resp.responseData[0].planCahrge),
            'requestsVal': resp.responseData[0].requestsVal,
            'searchCredit': resp.responseData[0].searchCredit,
            'searchCreditBalance': resp.responseData[0].searchCreditBalance,
            'status': resp.responseData[0].status,
            'subscriptionId': resp.responseData[0].subscriptionId,
            'subscriptionName': resp.responseData[0].subscriptionName,
            'subscriptionType': resp.responseData[0].subscriptionType,
            'tilkeeCredit': resp.responseData[0].tilkeeCredit,
            'tilkeeCreditBalance': resp.responseData[0].tilkeeCreditBalance,
            'total': resp.responseData[0].total,
            'trackedDocumentsVal': resp.responseData[0].trackedDocumentsVal
          }

          console.log(this.free_subscription)
          console.log("==============================")
          console.log(this.yearly_subscription)
         // console.log(this.yearly_subscription.status);
          if(this.yearly_subscription.status == 'Open')
                {
                 // console.log("satisfy");
                  this.buy_subscription=true;
                  console.log(this.buy_subscription);
                  this.buy_subscription_button_text="Buy Subscription" 
                }
                else
                {
                  this.buy_subscription_button_text=this.yearly_subscription.status
                  console.log("not satisfy");
                }
          console.log(this.toHTML(resp.responseData[0].planCahrge))
          
        }
      },
      (err) => { }
    )
   
  }
  //import { MyAccountPage } from '../my-account/my-account';
  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }
  gotothankyou(subscriptionid) {
    this.navCtrl.push(PaymentdetailsPage)

    let subscriptionplan_select = {
      'os': 'Web',
      'osVersion': localStorage.getItem('osVersion'),
      'appVersion': '1.0',
      'locale': 'eng',
      'customerId': localStorage.getItem('customerId'),
      'sessionId': localStorage.getItem('customerSessionId'),
      'planId': subscriptionid
    }
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();
    this.globalservice.subscriptionplanselect(subscriptionplan_select).subscribe(
      (resp) => {
        console.log(resp);
        loadingPop.dismiss();
        if (resp.responseStatus.STATUS == 'SUCCESS' && resp.responseStatus.STATUSCODE == '200') {
          this.navCtrl.push(PaymentdetailsPage)
        }
      },
      (err) => {
        loadingPop.dismiss();
        this.helperservice.sendalertmessage('bottom', err)
      },
    )
  }
  // this function used to convert html speacil chareter to orginal element
  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
}

}
