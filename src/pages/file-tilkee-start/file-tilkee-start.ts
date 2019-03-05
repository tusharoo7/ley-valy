import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyAccountPage } from '../my-account/my-account';
/**
 * Generated class for the FileTilkeeStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'tilkee_api_integration'})
@Component({
  selector: 'page-file-tilkee-start',
  templateUrl: 'file-tilkee-start.html',
})
export class FileTilkeeStartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileTilkeeStartPage');
  }
// GOES TO CRETE PROJECT PAGE
  createproject()
  {
    this.navCtrl.push('create_project');
  }
  // GOES TO READ PROJECT PAGE
  file_read_status()
  {
    this.navCtrl.push('read_project');
  }
  // GOES TO UNREAD PROJECT PAGE
  file_not_read_status()
  {
    this.navCtrl.push('unread_project');
  }
  // GOES TO DRAFTED PROJECT
  drafted_file()
  {
    this.navCtrl.push('drafted_project');
  }
// GOES TO LISTED PROJECTS
  listproject()
  {
    this.navCtrl.push('list_projects');
  }

  got_to_home() {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    this.navCtrl.setRoot(MyAccountPage)
  }
}
