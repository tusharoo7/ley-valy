import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 import { BussinesscardPage } from '../bussinesscard/bussinesscard';
import { BussinesscardDetailsPage } from '../bussinesscard-details/bussinesscard-details';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import {ContactPage} from '../contact/contact'
import { HelperService } from '../../services/helper/helper.service';

import {TrackfilePage} from '../trackfile/trackfile';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  constructor(public globalservice: GlobalValueProvider,public navCtrl: NavController, public navParams: NavParams,public helperservice : HelperService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }
  gobussiness() {
    this.navCtrl.push(BussinesscardPage); 
  }
  start_track_a_file(){
    
      //  this.navCtrl.push('tilkee_api_integration')
      this.navCtrl.push(TrackfilePage);
  }
  go_search_contact()
  {
    this.navCtrl.push(ContactPage);
  }
 
  onFileChanged(event)
  {
    let selectedFile = event.target.files[0]
    
   // var form = new FormData();
  //  form.append("file", selectedFile);
  //   this.globalservice.tilkeedirectupload(selectedFile).subscribe((resp)=>{
  //     console.log(resp)
  //     this.globalservice.datadirectupload(selectedFile,resp).subscribe((resp)=>{
  //       console.log(resp)
  //     })
  //   },(err)=>{})
   }
}
