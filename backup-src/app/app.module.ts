import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// imported pages 
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { MyAccountPage } from '../pages/my-account/my-account';
// imported custom services  and providers
import { HelperService } from '../services/helper/helper.service';
import { GlobalValueProvider } from '../providers/global-value/global-value';
import { ApitwoService } from '../services/api/apitwo.service';
// imported  plugins and internal modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyAccountPage,
    SignupPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  
    SignupPage,
    ForgotPasswordPage,
    MyAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HelperService,
    GlobalValueProvider,
    ApitwoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
