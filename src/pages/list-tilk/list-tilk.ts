import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

/**
 * Generated class for the ListTilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-tilk',
  templateUrl: 'list-tilk.html',
})
export class ListTilkPage {
  public projectid :any ;
  public tik_list :any;
  constructor( public viewCtrl: ViewController , public globalservice: GlobalValueProvider,public helperservice : HelperService , public navCtrl: NavController, public navParams: NavParams) {
    this.projectid = navParams.get('projectid') ;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTilkPage');

    this.globalservice.listtilk(this.projectid).subscribe((resp) => {
      console.log(resp.contents);
      
      if (resp.contents!="")
                  {
                    this.tik_list = resp.contents;
                  }
                  else
                   {
                    this.helperservice.sendalertmessage('bottom','No Projects Created');
                  }
 
      //this.navCtrl.push('tilkee_api_integration');
        
 }, (err) => 
 {
 this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
 });   
 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
