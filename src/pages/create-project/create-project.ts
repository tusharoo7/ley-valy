import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

import { FileTilkeeStartPage } from '../../pages/file-tilkee-start/file-tilkee-start';

import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the CreateProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'create_project'})
@Component({
  selector: 'page-create-project',
  templateUrl: 'create-project.html',
})
export class CreateProjectPage {

  public project = {
                     'name':'', 
                     'archived_at':'', 
                     'can_be_downloaded':'', 
                     'duration':'', 
                     'external_id':''
                    }

  constructor(public globalservice: GlobalValueProvider,public helperservice : HelperService ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProjectPage');
  }
// CREATE NEW PROJECT
  create_a_project()
  {
         
      if(this.project.name=='')
      {
        this.helperservice.sendalertmessage('bottom','Please Enter Your Project Name');
      }
      else
      {
        let loadingPop = this.helperservice.createLoadingBar();
        loadingPop.present();
        this.globalservice.addproject(this.project).subscribe((resp) => {
                loadingPop.dismiss();
               //this.navCtrl.push('tilkee_api_integration');
                 if (resp.id!="")
                 {
                   this.helperservice.sendalertmessage('bottom','Project Created Sucessfully');
                   this.navCtrl.push('tilkee_api_integration');   
                 }
                 else
                  {
                   this.helperservice.sendalertmessage('bottom','Failure ,Project Not Created');
                 }
         }, (err) => 
         {
          this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
        });   

      }
  }

  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }
}
