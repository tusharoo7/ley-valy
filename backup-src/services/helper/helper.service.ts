import { Injectable } from '@angular/core';
import { ToastController ,LoadingController } from 'ionic-angular';

//import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class HelperService {


  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { }

  sendalertmessage(position: string,message: string)
  {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }  

  createLoadingBar()
  {
    return this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/imgs/loader.gif" alt="">',
      dismissOnPageChange: false,
  });
  }

}
