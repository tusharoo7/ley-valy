import { Injectable } from '@angular/core';
import { ToastController ,LoadingController ,AlertController ,App  } from 'ionic-angular';

import {HomePage} from '../../pages/home/home';
//import { MyAccountPage } from '../../pages/my-account/my-account';

//import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class HelperService {


  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl :AlertController,
    public app: App, 
   
  ) { }
// create tost message 
  sendalertmessage(position: string,message: string)
  {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }  
// create image loading bar
  createLoadingBar()
  {
    return this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/loader.gif" alt="">',
      dismissOnPageChange: false,
  });
  }
// create msg loading bar
  createLoadingBar_upload(msg)
  {console.log(msg)

    return this.loadingCtrl.create({
      spinner: 'hide',
      content: msg,
      dismissOnPageChange: false,
  });
  }
// show alert msg
  showConfirmAlert(titel :string,message:string) {
    let response :string ;
    let alert = this.alertCtrl.create({
        title: titel,
        message: message,
        buttons: [
            {
                text: 'No',
                handler: () => {
                  alert.dismiss(false);
                  return false;
                  
                }
            },
            {
                text: 'Yes',
                handler: () => {
                  alert.dismiss(true);
                  return false;
                  
                }
            }
        ]
    })
    return alert;
    
  }
// directly move to login page 
  backtohome()
  {
    console.log("nav ctrl out side of page strture");
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
    this.app.getRootNav().setRoot(HomePage)
  }
}
