import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// imported pages 
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentPage } from '../pages/payment/payment';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { BussinesscardPage } from '../pages/bussinesscard/bussinesscard';
import { BussinesscardDetailsPage } from '../pages/bussinesscard-details/bussinesscard-details';
import { BussinesscardEditPage } from '../pages/bussinesscard-edit/bussinesscard-edit';
import { MyAccountPage } from '../pages/my-account/my-account';
import {ChangePasswordPage } from '../pages/change-password/change-password';
import {ProjectStatPage} from '../pages/project-stat/project-stat';
import {TilkStatPage} from '../pages/tilk-stat/tilk-stat';
import {TrackfilePage} from '../pages/trackfile/trackfile';

import {BussinesscardAddPage} from '../pages/bussinesscard-add/bussinesscard-add'
import {ContactPage} from '../pages/contact/contact' ;
import {TrackPage } from '../pages/track/track';
import {AddtrackPage } from '../pages/addtrack/addtrack';
import {TrackfilepreviewPage} from '../pages/trackfilepreview/trackfilepreview';
import {PaymentdetailsPage} from '../pages/paymentdetails/paymentdetails';
// imported custom services  and providers
import { HelperService } from '../services/helper/helper.service';
import { GlobalValueProvider } from '../providers/global-value/global-value';
import { ApitwoService } from '../services/api/apitwo.service';
// imported  plugins and internal modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { Device } from '@ionic-native/device';

import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';
import { ImageCropperComponent} from "ngx-img-cropper";
import {NgxPaginationModule} from 'ngx-pagination'
//import { Ng2FileSizeModule } from 'ng2-file-size';
//import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';
import { DragulaModule } from 'ng2-dragula';
import { Pipe,PipeTransform } from '@angular/core';
import * as moment from 'moment'
import {TooltipModule} from "ngx-tooltip";

//import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// Import the library 
import { IonicImageViewerModule } from 'ionic-img-viewer';

// import {
//   SocialLoginModule,
//   AuthServiceConfig,
 
//   LinkedinLoginProvider
// } from "angular5-social-auth";


// // Configs 
// export function getAuthServiceConfigs() {
// let config = new AuthServiceConfig(
//     [
      
//        {
//         id: LinkedinLoginProvider.PROVIDER_ID,
//         provider: new LinkedinLoginProvider('813i281nxmkqi1')
//       }
//     ]
// );
// return config;
// }

// import {
//   SocialLoginModule,
//   AuthServiceConfig,
 
//   LinkedinLoginProvider
// } from "angular5-social-auth";
import {
  SocialLoginModule, 
  AuthServiceConfig,
  LinkedinLoginProvider
} from 'ng4-social-login';
// common pipe 
const CONFIG = new AuthServiceConfig([
  {
   id: LinkedinLoginProvider.PROVIDER_ID,
   provider: new LinkedinLoginProvider('813i281nxmkqi1')
 }
],false);
export function provideConfig() {
 return CONFIG;
}
@Pipe({name:"dateformatter"})
class dateformatterPipe implements PipeTransform{transform(value:string):string{
return moment(value).startOf('hour').fromNow();
}}
@Pipe({name: "milisecondtotime"})
class MilisecondtotimePipe implements PipeTransform  {
  transform(value: number): string
    {
      let abc ="";
      let sww="";
      var seconds = (value/1000);
      let xyz = (seconds/60).toString() ;
      var minutes = parseInt(xyz, 10);
      let mnc= (seconds%60).toFixed(2);
      seconds = +mnc
      var hours = parseInt((minutes/60).toString(), 10);
      minutes = minutes%60;
      
      if(hours>0)
      {
         abc = hours + 'hr'
      }
      else
      {
         abc = ''
      }
      if(minutes>0)
      {
         sww = minutes + 'm'
      }
      else
      {
         sww = ''
      }
      return abc+ sww + seconds +'s';
   
  }
}

@NgModule({
  declarations: [
    MyApp,
    
    HomePage,
    MyAccountPage,
    SignupPage,
    ForgotPasswordPage,
    ProfilePage,
    PaymentPage,
    BussinesscardPage,
    BussinesscardDetailsPage,
    BussinesscardEditPage,
    ChangePasswordPage,
    ImageCropperComponent,
    BussinesscardAddPage,
    ContactPage,
    TrackPage,
    AddtrackPage,
    TrackfilepreviewPage,
    
   // AbsoluteDrag
   MilisecondtotimePipe,
   dateformatterPipe
   ,ProjectStatPage,
   TilkStatPage,
   TrackfilePage,
   PaymentdetailsPage

  ],
  imports: [
   // Ng2GoogleChartsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
   // Ng2FileSizeModule,
    IonicModule.forRoot(MyApp),
    DragulaModule.forRoot(),
    TooltipModule,
    SocialLoginModule,
    IonicImageViewerModule,
    SocialLoginModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaymentPage,
    SignupPage,
    ForgotPasswordPage,
    MyAccountPage,
    ProfilePage,
    BussinesscardPage,
    BussinesscardDetailsPage,
    BussinesscardEditPage,
    ChangePasswordPage,
    BussinesscardAddPage,
    ContactPage,
    TrackPage,
    AddtrackPage,
    TrackfilepreviewPage,
    ProjectStatPage,
    TilkStatPage,
    TrackfilePage,
    PaymentdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HelperService,
    GlobalValueProvider,
    ApitwoService,
    ImageCompressService,
    ResizeOptions,
    
    //UniqueDeviceID,
   // Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Inject apiKey and, optionally, authorize to integrate with LinkedIN official API
    // {provide: AuthServiceConfig,
    //   useFactory: getAuthServiceConfigs}
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }

  ]
})
export class AppModule {}
