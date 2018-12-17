import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { FileUploadPage } from '../file-upload/file-upload';

/**
 * Generated class for the ListProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name :'list_projects'})
@Component({
  selector: 'page-list-projects',
  templateUrl: 'list-projects.html',
})
export class ListProjectsPage {
 public projects_list :any ;closeResult: string;readstatus :any =1
  constructor(public modalCtrl: ModalController,public globalservice: GlobalValueProvider,public helperservice : HelperService  ,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
  //  window.location.reload();
    this.globalservice.listproject(this.readstatus).subscribe((resp) => {
      console.log(resp.contents);
      
      if (resp.contents!="")
                  {
                    this.projects_list = resp.contents;
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
  ionViewDidLoad() {

    console.log('ionViewDidLoad ListProjectsPage');

    this.globalservice.listproject(this.readstatus).subscribe((resp) => {
     console.log(resp.contents);
     
     if (resp.contents!="")
                 {
                   this.projects_list = resp.contents;
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


  addfile(projectid)
  {
    console.log(projectid);
    let profileModal = this.modalCtrl.create('FileUploadPage', { projectid: projectid });
        profileModal.present();
  } 

  addlink(projectid)
  {
    console.log(projectid);
    let profileModal = this.modalCtrl.create('TilkCreatePage', { projectid: projectid });
        profileModal.present();
  } 
  createdlink(projectid)
  {
    let profileModal = this.modalCtrl.create('ListTilkPage', { projectid: projectid });
        profileModal.present();
  }
  viewstat(projectid)
  {
    let profileModal = this.modalCtrl.create('TilkStatPage', { projectid: projectid });
        profileModal.present();
  }

  
}
