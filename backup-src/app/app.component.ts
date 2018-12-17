import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
       { title: 'Profile', component: null },
      { title: 'Settings', component: null },
      { title: 'Payment', component: null },
      { title: 'Mail', component: null },
      { title: 'Logout', component: null },
      
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


    if( page.component!=null && page.component!=undefined && page.component!='' )
    {
      //console.log("hello");
      if(page.component==HomePage)
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
      console.log("hello");
      // let xsrf_token = localStorage.getItem('xsrf_token');
      // localStorage.clear();
      // localStorage.setItem('xsrf_token', xsrf_token);  
      // sessionStorage.clear();
      // this.events.publish('logged_out_sucessfull', 'logout', Date.now());
      this.nav.setRoot(HomePage);
      //console.log(" uio  hello");
    }
  }
}
