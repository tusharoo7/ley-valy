import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  createproject()
  {
    this.navCtrl.push('create_project');
  }
  file_read_status()
  {
    this.navCtrl.push('read_project');
  }
  file_not_read_status()
  {
    this.navCtrl.push('unread_project');
  }
  drafted_file()
  {
    this.navCtrl.push('drafted_project');
  }

  listproject()
  {
    this.navCtrl.push('list_projects');
  }
}
