import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { ProfilePage } from '../pages/profile/profile';

import { PaymentPage } from '../pages/payment/payment';
import {MyAccountPage} from '../pages/my-account/my-account';
import {ChangePasswordPage} from '../pages/change-password/change-password' ;
import {ContactPage} from '../pages/contact/contact' ;
import { GlobalValueProvider } from '../providers/global-value/global-value';
import { HelperService } from '../services/helper/helper.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public helperservice : HelperService ,public globalservice: GlobalValueProvider , public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MyAccountPage },
       { title: 'Profile', component: ProfilePage },
      // { title:  'Settings', component: MyAccountPage },
      //{ title:  'Payment', component: PaymentPage },
      { title:  'Payment', component: MyAccountPage },
      // { title:  'Mail', component: MyAccountPage },
      {title :'Change Password', component:ChangePasswordPage },
      // {title :'Contact Information' ,component :ContactPage},
      { title:  'Logout', component: null },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);


    console.log(page);
    if( page.component!=null && page.component!=undefined && page.component!='' )
    {
      console.log("hello one");
      if(page.component==MyAccountPage)
      {

        this.nav.setRoot(page.component);
      }
      else
      {
        this.nav.push(page.component);
      }

      
    }
    else
    {
      console.log('logout heated');

      let logoutjson = {
                        'locale' :'eng', 
                        'os':'Web',
                        'osVersion':localStorage.getItem('osVersion'), 
                        'appVersion':'1.0', 
                        'sessionId':localStorage.getItem('customerSessionId'), 
                        'customerId':localStorage.getItem("customerId")
                       }
                       console.log(logoutjson);
                       this.globalservice.calllogout(logoutjson).subscribe((resp)=>{
                        if(resp.responseStatus.STATUS=='SUCCESS' && resp.responseStatus.STATUSCODE=='200' )
                        {
                          console.log(resp);
                          localStorage.setItem("customerId" ,"");
                          localStorage.setItem("customerEmail" ,"");
                          localStorage.setItem("customerFirstName" ,"");
                          localStorage.setItem("customerLastName" ,"");
                          localStorage.setItem("customerProfilePic" ,"");
                          localStorage.setItem("customerSessionId" ,"");
                          localStorage.setItem('customerEnterprise',"");
                          localStorage.setItem('customerPosition',"");
                          localStorage.setItem('customerMobile',"");
                          localStorage.setItem('customerPhone',"");
                            this.nav.setRoot(HomePage);
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
                       },(err)=>{
                        this.helperservice.sendalertmessage('bottom',err);
                       })
     
     

    }
  }
}
